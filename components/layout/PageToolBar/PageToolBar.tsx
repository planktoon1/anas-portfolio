import Image from "next/image";
import mockImage from "../../../assets/images/topbar.png";
export interface IPageToolBarProps {}

export function PageToolBar({}: IPageToolBarProps) {
  return (
    <div className=" bg-background-2 max-w-[100vw] overflow-hidden">
      <figure
        style={{ width: 787, aspectRatio: "8.1979/1", marginBottom: "-2px" }}
      >
        <Image src={mockImage} />
      </figure>
    </div>
  );
}
