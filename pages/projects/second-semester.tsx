import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function ThirdSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <Txt variant={TxtVariant.H1} className="!mt-20">
        Second Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        Single family house with basement
      </Txt>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Plans
        </Txt>
        <Txt className="mb-8">
          House plans;
          <br />
          Site plan;
          <br />
          Ventilation plan
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/second-semester/s2_House_Plans.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Details
        </Txt>
        <Txt className="mb-8">
          RC Block and deck Element detail;
          <br />
          Internal Wall and Ceiling detail;
          <br />
          Wet room first floor detail
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/second-semester/s2_details.pdf"
        />
      </div>
      <Txt variant={TxtVariant.H2} className="mt-12">
        Cross section
      </Txt>
      <div className="col-span-4">
        <PDFPreview
          className="max-w-[400px] mx-auto"
          height={500}
          url="/second-semester/s2_section.pdf"
        />
      </div>
    </PageGrid>
  );
}

export default ThirdSemesterProject;
