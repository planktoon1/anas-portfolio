import { PageGrid } from "../components/layout/PageGrid/PageGrid";
import { PDFPreview } from "../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../components/shared/Text";

function Resume() {
  return (
    <PageGrid>
      <Txt variant={TxtVariant.H1}>Resume</Txt>
      <div className="col-span-4">
        <PDFPreview className="mx-auto" height={1200} url="/CV.pdf" />
      </div>
    </PageGrid>
  );
}

export default Resume;
