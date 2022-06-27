/* eslint-disable */
// import Image from "next/image";
import Link from "next/link";
import { IClassName } from "../../types/genericTypes";
export interface IImagePreviewProps extends IClassName {
  title?: string;
  src: string;
}

export function ImagePreview({ title, src, className }: IImagePreviewProps) {
  return (
    <figure className={`relative h-fit group ${className ?? ""}`}>
      <img className="min-w-full h-auto " src={src} alt="Image couldn't load" />
      <div
        className={`
        absolute 
        inset-0 
        opacity-0 
        bg-black
        z-10 
        group-hover:opacity-70 
        pointer-events-none
        group-hover:pointer-events-auto
        text-background-1
        transition-all
        flex
        flex-col
        p-2
        `}
      >
        <div className="flex justify-end">
          <Link href={`/file/?n=${src}`}>
            <a
              title="Open in new tab"
              className="text-white flex justify-between"
            >
              🗖
            </a>
          </Link>
        </div>
        <div className="flex-1 relative">
          <span className="absolute bottom-0 left-0 right-0 max-h-full text-white line-clamp-4 font-size-2">
            {title}
          </span>
        </div>
      </div>
    </figure>
  );
}
