import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import { IClassName } from "../../types/genericTypes";
import { loadPDF } from "./PDFPreview";

export interface IPDFFullpageProps extends IClassName {
  url: string;
}

function _PDFFullpage({ url }: IPDFFullpageProps) {
  const id = useMemo(
    () => `pdf-fullpage-${Math.round(Math.random() * 1000)}`,
    []
  );
  useEffect(() => {
    loadPDF(id, url, {
      name: url,
      showAnnotationTools: false,
    });
  }, [url, id]);

  return <div id={id} style={{ height: "100%" }} />;
}

export const PDFFullpage = dynamic(() => Promise.resolve(_PDFFullpage), {
  ssr: false,
});
