import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IClassName } from "../../../types/genericTypes";

function DrawerMenu({ className }: IClassName) {
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth > 639 && router.pathname.startsWith("/projects")) {
      setOpen(true);
    }
  }, [router.pathname]);

  const [open, setOpen] = useState(false);

  const projects = [
    {
      url: "/projects/first-semester",
      name: "First semester",
    },
    {
      url: "/projects/second-semester",
      name: "Second semester",
    },
    {
      url: "/projects/third-semester",
      name: "Third semester",
    },
  ];

  return (
    <div
      onClick={() => (!open ? setOpen(true) : null)}
      className={`
      sm:max-w-[300px]
      max-h-[300px]
      sm:max-h-max
      w-full
      overflow-y-auto
      sm:h-full
      relative
      flex
      flex-col
      transition-all
      bg-background-2
      ${
        open
          ? "min-h-[300px] min-w-[180px]"
          : "sm:w-[26px] hover:sm:bg-background-3 hover:cursor-pointer"
      }
      ${className ?? ""}
      `}
    >
      <span
        className="absolute top-[4px] right-[6px] font-bold cursor-pointer z-10 text-center text-[#383838]"
        onClick={() => setOpen(!open)}
      >
        {open ? "⚊" : "☰"}
      </span>
      <div
        className={`min-h-[26px] h-[26px] pl-2
         truncate flex items-center ${
           open ? " pr-6" : "sm:pl-0 hover:bg-background-3"
         }`}
      >
        <p
          title="Ana's portfolio"
          className={`block ${
            open ? "" : "sm:hidden"
          } max-w-[calc(100% - 16px)]`}
        >
          Portfolio browser
        </p>
      </div>
      <div
        className={`flex-1 bg-background-1 p-2  ${
          open ? "opacity-100" : "hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {projects.map((project, i) => (
            <li key={`project_link_${i}_${project.url}`}>
              <span
                className={`hover:!underline ${
                  project.url === router.asPath ? "font-bold" : ""
                }`}
              >
                <Link href={project.url}>{project.name}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DrawerMenu;
