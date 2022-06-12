import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { UrlObject } from "url";
import Image from "next/image";
import { IClassName } from "../../../types/genericTypes";
import Overlay from "../../Overlay";

export interface IHeaderProps extends IClassName { }

export function Header({ className }: IHeaderProps) {
  return (
    <header
      className={`w-full flex flex-col bg-background-3 ${className ?? ""}`}
    >
      <div className="flex justify-between">
        <div className="m-1">

          <Image src="/A.png" width="18px" height="18px" alt="A" />
          <Image src="/N.png" width="18px" height="18px" alt="N" />
          <Image src="/A.png" width="18px" height="18px" alt="A" />
        </div>
        <Overlay />
      </div>
      <ul className="flex pt-1 items-end flex-wrap">
        <FileButton>IDK what</FileButton>
        <NavigationButton href="/">About</NavigationButton>
        <NavigationButton href="/projects">Projects</NavigationButton>
        <NavigationButton href="/contact">Contact me</NavigationButton>
        <NavigationButton href="/skills">Skills</NavigationButton>
        <NavigationButton href="/resume">Resume</NavigationButton>
      </ul>
    </header>
  );
}

export interface INavigationButtonProps {
  href: string | UrlObject;
}

export function NavigationButton({
  href,
  children,
}: PropsWithChildren<INavigationButtonProps>) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <li
        className={`
        h-6
        px-5
        py-1
        cursor-pointer
        w-full
        sm:w-min
        transition-colors
        duration-300
        ${isActive ? "bg-background-2" : "bg-background-3 hover:bg-background-2"
          }
    `}
      >
        <a>{children}</a>
      </li>
    </Link>
  );
}

export function FileButton({ children }: PropsWithChildren<{}>) {
  return (
    <li
      style={{
        background:
          "linear-gradient(0deg, rgba(43,124,180,1) 0%, rgba(43,124,180,1) 48%, rgba(0,212,255,1) 100%)",
      }}
      className={`
        h-6
        px-5
        py-1
        bg-primary
        text-text-primary
        cursor-pointer
        w-full
        sm:w-min
        whitespace-nowrap
    `}
    >
      <button>{children}</button>
    </li>
  );
}
