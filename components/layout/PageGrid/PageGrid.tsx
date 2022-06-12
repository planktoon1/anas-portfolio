import { PropsWithChildren } from "react";

export function PageGrid({ children }: PropsWithChildren<{}>) {
  return (
    <div className="grid grid-cols-4 max-w-5xl gap-x-8 gap-y-2 mx-auto p-2 my-8">
      {children}
    </div>
  );
}
