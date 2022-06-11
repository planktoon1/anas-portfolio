import { useRouter } from "next/router";
import { PDPFullpage, PDPPreview } from "../../components/shared/PDFPage";

function ProjectsTests() {
  const { query } = useRouter();
  const { filename: _filename } = query;
  const filename = getQueryAsString(_filename);
  console.log(filename);

  if (filename.endsWith(".pdf"))
    return <PDPFullpage url="./testpdf.pdf" title="Test 1" />;

  return <div>IDK What happened {filename}</div>;
}

export default ProjectsTests;

function getQueryAsString(query: string | string[] | undefined): string {
  if (!query) return "";
  if (Array.isArray(query)) return query.join("/");
  return query;
}
