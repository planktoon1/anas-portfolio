import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function ThirdSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <Txt variant={TxtVariant.H1} className="!mt-20">
        Fourth Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        Multistory residential homes
      </Txt>
      <Txt variant={TxtVariant.H2} className="mt-8">
        Outline Proposal
      </Txt>
      <div className="col-span-4 mb-4">
        <Txt>
          In this semester I was in a group with 2 erasmus students. One from
          engineering and the other from an architectural bachelor.
        </Txt>
        <br />
        <Txt>
          Together we were able to see our project through different
          perspectives and give value in our own ways considering our different
          backgrounds.
          <br />
          <br />
          Here we had 1 month to work on an Outline proposal and bring it to
          life by creating architectural posters. This was a new experience for
          me and I learned how to navigate some softwares like “Space Maker” to
          produce a sun analysis and the basics of AutoCad.
        </Txt>
      </div>
      <ImagePreview
        className="col-span-4 lg:col-span-2 justify-self-center"
        src="/fourth-semester/s4_print1.png"
        title="Poster 1"
      />
      <ImagePreview
        className="col-span-4 lg:col-span-2 justify-self-center"
        src="/fourth-semester/s4_print2.png"
        title="Poster 2"
      />
      <Txt variant={TxtVariant.H2} className="mt-12">
        Project proposal
      </Txt>
      <Txt variant={TxtVariant.H3}>Details</Txt>
      <div className="col-span-4">
        <Txt>
          Internal stairs detail;
          <br />
          Level access and deck element detail;
          <br />
          Internal load bearing wall and foundation detail;
          <br />
          Division wall and floor detail;
          <br />
          Basement external wall (general) and non load bearing side of deck
          delement detail;
          <br />
          Access balcony and foundation detail;
          <br />
          Access balcony and external wall detail
          <br />
        </Txt>
      </div>
      <div className="col-span-4 mb-12">
        <PDFPreview
          className=" mx-auto"
          height={500}
          url="/fourth-semester/s4_details.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-12">
        <Txt variant={TxtVariant.H3}>Structural design documentation</Txt>
        <PDFPreview
          className=" mx-auto"
          height={500}
          url="/fourth-semester/s4_Calculations-report.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-12">
        <Txt variant={TxtVariant.H3}>Building services documentation</Txt>
        <PDFPreview
          className="mx-auto"
          height={500}
          url="/fourth-semester/s4_building_services_documentation.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-12">
        <Txt variant={TxtVariant.H3}>Plans</Txt>
        <Txt>
          Groundfloor plan; <br />
          Deck element plan
        </Txt>
        <PDFPreview
          className="mx-auto"
          height={500}
          url="/fourth-semester/s4_plans.pdf"
        />
      </div>
      <div className="col-span-4 lg:col-span-2 mb-12">
        <Txt variant={TxtVariant.H3}>South Elevation</Txt>
        <Txt>
          <br />
          <br />
        </Txt>
        <PDFPreview
          className="mx-auto"
          height={500}
          url="/fourth-semester/s4_south_elevation.pdf"
        />
      </div>
    </PageGrid>
  );
}

export default ThirdSemesterProject;
