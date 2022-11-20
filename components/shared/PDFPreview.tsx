import dynamic from "next/dynamic.js";
import Link from "next/link.js";
import { useEffect, useMemo } from "react";
import { IClassName } from "../../types/genericTypes.js";
import { Txt, TxtVariant } from "./Text";
import ViewSDKClient from "./ViewSDKClient.js";

interface IPDFPreviewProps extends IClassName {
  title?: string;
  smallTitle?: boolean;
  url: string;
  /** Default - 320px */
  height?: number;
}

function _PDFPreview({
  url,
  title,
  height = 320,
  smallTitle = false,
  className,
}: IPDFPreviewProps) {
  const id = useMemo(() => `id-${Math.round(Math.random() * 1000)}`, []);
  useEffect(() => {
    loadPDF(id, url, {
      name: title,
      showPrintPDF: false,
      showFullScreen: false,
      showAnnotationTools: false,
      embedMode: "SIZED_CONTAINER",
    });
  }, [id, url, title]);

  return (
    <div className={`w-full  ${className ?? ""} ${smallTitle ? "-mt-7" : ""}`}>
      <Link href={`/file/?n=${url}`}>
        <a
          title="Open in new tab"
          className="w-full relative flex items-center justify-between"
        >
          <Txt
            variant={TxtVariant.H3}
            className={`font-thin ${smallTitle ? "opacity-50" : "opacity-80"}`}
          >
            {title && title}
          </Txt>
          <div className="text-xl">🗖</div>
        </a>
      </Link>
      <div style={{ height }} className="w-full min-h-0 overflow-auto border">
        <div id={id} />
      </div>
    </div>
  );
}

export function loadPDF(containerId: string, url: string, config: any) {
  const viewSDKClient = new ViewSDKClient();
  viewSDKClient.ready().then(() => {
    viewSDKClient.previewFile(containerId, config, url);
  });
}

export const PDFPreview = dynamic(() => Promise.resolve(_PDFPreview), {
  ssr: false,
});
