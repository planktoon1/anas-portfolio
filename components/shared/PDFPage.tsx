import Link from "next/link.js";
import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import ViewSDKClient from "./ViewSDKClient.js";

interface IPDPPreviewProps {
  title?: string;
  url: string;
}

export function PDPPreview({ url, title }: IPDPPreviewProps) {
  const { asPath } = useRouter();

  useEffect(() => {
    loadPDF("pdf-div", url, {
      name: title,
      showPrintPDF: false,
      showFullScreen: true,
      showAnnotationTools: false,
      embedMode: "SIZED_CONTAINER",
    });
  }, [url, title]);

  return (
    <Link href={`${asPath}/${url}`}>
      <div className="cursor-pointer w-min">
        {title && <h3>{title}</h3>}
        <div className="h-80 w-96 min-h-0 overflow-auto">
          <div id="pdf-div" />
        </div>
      </div>
    </Link>
  );
}

export function PDPFullpage({ url, title }: IPDPPreviewProps) {
  useEffect(() => {
    loadPDF("pdf-div-full", url, {
      name: title,
      embedMode: "IN_LINE",
    });
  }, [url, title]);

  return (
    <div className="">
      {title && <h3>{title}</h3>}
      <div id="pdf-div-full" />
    </div>
  );
}

function loadPDF(containerId: string, url: string, config: any) {
  const viewSDKClient = new ViewSDKClient();
  viewSDKClient.ready().then(() => {
    viewSDKClient.previewFile(containerId, config, url);
  });
}
