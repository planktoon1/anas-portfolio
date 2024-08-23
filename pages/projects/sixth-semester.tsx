/* eslint-disable @next/next/no-img-element */
import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function SixthSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <div className="col-span-4">
        <img
          className="min-w-full h-60 object-cover"
          src="/s6_aart_logo.jpg"
          alt="AART logo"
        />
      </div>
      <Txt variant={TxtVariant.H1} className="!mt-20">
        Internship Semester{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        at AART Architects
      </Txt>
      <Txt variant={TxtVariant.H2} className="mt-8">
        Travbyen Billund - A sustainable urban development
      </Txt>
      <div className="col-span-4 mb-4">
        <Txt>
          During my 20-week internship internship semester I had the opportunity
          to work on the Travbyen Project, a wooden construction development. My
          focus throughout this experience was on deepening my knowledge of
          wooden constructions while actively contributing to various aspects of
          the project.
        </Txt>
        <br />
        <Txt>
          Working closely with my mentor, I was responsible for 3D modelling
          buildings and creating detailed families for windows and doors. I also
          played a key role in solving technical challenges, such as developing
          precise sokkel details. My work extended across a range of
          architectural drawings, including elevations, site plans, sections and
          floor plans.
        </Txt>

        <br />
        <Txt>
          Additionally, I participated in regular meetings with the project
          manager and engineers, which provided valuable insights into project
          leadership—an area I am particularly passionate about. This hands-on
          experience has significantly enhanced my skills and understanding of
          both architectural design and project management.
        </Txt>
        <br />
        <Txt>
          On the side I have also worked in another project helping produce
          architectural drawings as the team was approaching a deadline.
        </Txt>
        <br />
        <Txt>
          Here you can find examples of the documents I worked on during my
          internship semester.
        </Txt>

        <div className="col-span-4 mt-10">
          <PDFPreview
            className="max-w-[600px] mx-auto"
            height={750}
            url="/s6_intern_work_examples.pdf"
            title="Internship documents"
          />
        </div>
      </div>
    </PageGrid>
  );
}

export default SixthSemesterProject;
