import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function ThirdSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <Txt variant={TxtVariant.H1} className="!mt-20">
        First Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        Single family house
      </Txt>
      <div className="col-span-4">
        <Txt>
          In first semester I had a bigger focus on making plans,
          analysis&apos;, learning how to 3D model and navigate through REVIT,
          sketching details and understanding the general idea of what the
          education would be about
        </Txt>
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Plans
        </Txt>
        <Txt className="mb-8">
          Brick modular plan; <br /> Truss plan; <br /> Foundation plan
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/first-semester/s1_plans.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Analysis&apos;
        </Txt>
        <Txt className="mb-8">
          Masonry analysis;
          <br />
          Roof anchoring analysis
          <br />
          <br />
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/first-semester/s1_analysis.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Details
        </Txt>
        <Txt className="mb-8">
          Roof detail;
          <br />
          Foundation sketch
          <br />
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/first-semester/s1_details.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          3D model
        </Txt>
        <Txt className="mb-8">Foundation and groundfloor 3D model</Txt>
        <ImagePreview
          className="col-span-2 justify-self-center"
          src="/first-semester/s1_3dmodel.png"
          title="Foundation and groundfloor 3D model"
        />
      </div>
    </PageGrid>
  );
}

export default ThirdSemesterProject;
