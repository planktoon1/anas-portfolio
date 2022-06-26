import { PropsWithChildren } from "react";
import { IClassName } from "../../../types/genericTypes";

export function PageGrid({
  className,
  children,
}: PropsWithChildren<IClassName>) {
  return (
    <div
      className={`grid grid-cols-4 max-w-5xl gap-x-8 gap-y-2 mx-auto p-2 my-8 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
