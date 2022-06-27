import { useRouter } from "next/router";
import { ImageFullpage } from "../components/shared/ImageFullpage";
import { PDFFullpage } from "../components/shared/PDFFullpage";

const imageExtensions = /(.png)|(.jpg)$/;

function ProjectsTests() {
  const { query } = useRouter();
  // const { filename: _filename } = query;
  const filename = query.n as string;

  // const filename = getQueryAsString(_filename);

  // TODO: Check if file exists, if not 404
  if (!filename) return <div>IDK What happened {filename}</div>;
  if (imageExtensions.test(filename)) return <ImageFullpage src={filename} />;
  if (filename.endsWith(".pdf")) return <PDFFullpage url={filename} />;

  return <div>IDK What happened {filename}</div>;
}

export default ProjectsTests;

function getQueryAsString(query: string | string[] | undefined): string {
  if (!query) return "";
  if (Array.isArray(query)) return query.join("/");
  return query;
}
