import Image from "next/image";
import mockImage from "../../../assets/images/topbar.png";
import { IClassName } from "../../../types/genericTypes";

export interface IPageToolBarProps extends IClassName {}

export function PageToolBar({ className }: IPageToolBarProps) {
  return (
    <div
      className={`bg-background-2 max-w-[100vw] overflow-hidden ${
        className ?? ""
      }`}
    >
      <figure
        style={{ width: 787, aspectRatio: "8.1979/1", marginBottom: "-2px" }}
      >
        <Image src={mockImage} alt="PageToolBar" />
      </figure>
    </div>
  );
}
