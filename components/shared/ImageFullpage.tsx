/* eslint-disable */
// import Image from "next/image";
import NotStolenLightbox from "./NotStolenLightbox/NotStolenLightbox";
export interface IImageFullpageProps {
  src: string;
}

export function ImageFullpage({ src }: IImageFullpageProps) {
  return (
    <div className="relative max-w-full  min-h-full flex-1">
      <NotStolenLightbox mainSrc={src} />
    </div>
  );
}
