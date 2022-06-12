import { PropsWithChildren } from "react";
import { IClassName } from "../../types/genericTypes";

export enum TxtVariant {
  Paragraph = "PARAGRAPH",
  H1 = "HEADER_1",
  H2 = "HEADER_2",
  H3 = "HEADER_3",
}

export interface ITxtProps extends IClassName {
  variant?: TxtVariant;
}

export function Txt({
  variant = TxtVariant.Paragraph,
  className,
  children,
}: PropsWithChildren<ITxtProps>) {
  switch (variant) {
    case TxtVariant.H1:
      return (
        <h1
          className={`text-5xl font-bold uppercase col-span-4 my-2 mt-6 ${
            className ?? ""
          }`}
        >
          {children}
        </h1>
      );
    case TxtVariant.H2:
      return (
        <h2
          className={`text-3xl font-semibold col-span-4 mt-2 ${
            className ?? ""
          }`}
        >
          {children}
        </h2>
      );
    case TxtVariant.H3:
      return (
        <h3 className={`font-semibold col-span-4 ${className ?? ""}`}>
          {children}
        </h3>
      );
    default:
      return <p className={`txt-base mb-2 ${className ?? ""}`}>{children}</p>;
  }
}
