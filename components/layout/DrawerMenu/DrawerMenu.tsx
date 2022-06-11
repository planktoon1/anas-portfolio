import { useState } from "react";
import Tabs from "../Tabs/Tabs";

const DrawerMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      onClick={() => (!open ? setOpen(true) : null)}
      className={`
      sticky
      top-0
      drawer 
      max-h-[300px] 
      w-full
      overflow-y-auto 
      sm:min-h-full 
      sm:max-h-full 
      sm:max-w-[33%] 
      sm:relative 
      flex 
      flex-col 
      transition-all 
      bg-background-2 
      ${
        open
          ? "min-h-[300px] min-w-[180px] w-[300px]"
          : "max-h-[52px]  sm:w-[26px] hover:sm:bg-background-3 hover:cursor-pointer"
      }
      `}
    >
      <span
        className="absolute top-[4px] right-[6px] font-bold cursor-pointer z-10 text-center text-[#383838]"
        onClick={() => setOpen(!open)}
      >
        {open ? "<-" : "☰"}
      </span>
      <div
        className={`transition-all min-h-[26px] h-[26px] pl-2
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
        className={`transition-all flex-1 bg-background-1 p-2  ${
          open ? "w-full opacity-100" : "hidden w-[0] opacity-0 "
        }`}
      >
        hover asdasd asd as das d<aside>as dsa d</aside>
        {/* TODO: CRAZY COOL CONTENT GOES HERE */}
      </div>
      <div
        className="sm:hidden hover:bg-background-3"
        onClick={(e) => e.stopPropagation()}
      >
        <Tabs />
      </div>
    </div>
  );
};

export default DrawerMenu;
