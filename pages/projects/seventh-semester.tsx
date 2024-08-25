/* eslint-disable @next/next/no-img-element */
import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function SeventhSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <ImagePreview
        className="my-auto col-span-4"
        src="/seventh-semester/s7_rendering.png"
        title="Rendering"
      />
      <Txt variant={TxtVariant.H1} className="!mt-16">
        Seventh Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        A Daycare Centre
      </Txt>
      <div className="col-span-4 mb-4">
        <Txt>
          For my 7th semester bachelor project, I collaborated with a classmate
          to develop a daycare centre based on an initial outline provided by
          AART Architects. Our project presented a significant degree of
          difficulty, particularly in addressing the buildability aspects of the
          long overhang terrace and roof.
        </Txt>
        <br />
        <Txt>
          Our focus was on the integration of steel structures, with a
          particular emphasis on the connections between concrete and steel
          elements. We worked extensively on refining technical details,
          ensuring that these critical connections were both practical and
          structurally sound. This project provided valuable hands-on experience
          with steel construction, enhancing my understanding of both
          architectural design and structural engineering.
        </Txt>
        <br />
        <Txt>
          The project was thoroughly worked through 3 different phases during
          this semester: Outline Proposal, Project Proposal and Tender Phase.
          Here you can find an overview of the finished documents worked on in
          the variety of areas such as Building and structural design and
          building services.
        </Txt>
        <br />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Building services
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/seventh-semester/s7_building_services.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-8">
          Details
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/seventh-semester/s7_details.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-12">
          Plans and sections
        </Txt>
        <div className="col-span-4">
          <PDFPreview
            smallTitle
            className="col-span-4 lg:col-span-2"
            url="/seventh-semester/s7_plans_and_section.pdf"
          />
        </div>
      </div>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt variant={TxtVariant.H2} className="mt-12">
          Structural design
        </Txt>
        <PDFPreview
          smallTitle
          className="col-span-4 lg:col-span-2"
          url="/seventh-semester/s7_structural_design.pdf"
        />
      </div>
    </PageGrid>
  );
}

export default SeventhSemesterProject;
