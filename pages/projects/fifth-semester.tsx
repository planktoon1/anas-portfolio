import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function FifthSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <Txt variant={TxtVariant.H1} className="!mt-20">
        Fifth Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        ERASMUS program in Lisbon, Portugal
      </Txt>
      <div className="col-span-4 mb-4 mt-8">
        <Txt>
          During my 5th semester, I participated in the ERASMUS program at
          Instituto Técnico Superior in Lisbon, Portugal, pursuing an Integrated
          Master’s in Architecture.
        </Txt>
        <br />
        <Txt>
          This experience broadened my architectural education beyond my core
          curriculum in Denmark. I engaged in diverse subjects including:
        </Txt>
        <br />
        <ul className="list list-inside list-disc space-y-2 mt-2">
          <li className="list-item ">
            <span className="font-bold">
              Theory of Conservation and Restoration:
            </span>{" "}
            Gained foundational knowledge in preserving historical monuments.
          </li>
          <li className="list-item ">
            <span className="font-bold">
              Urban Management and Real Estate Economics:
            </span>{" "}
            Developed skills in urban area development through problem-based
            learning.
          </li>
          <li className="list-item ">
            <span className="font-bold">Environmental Impacts:</span> Conducted
            environmental impact assessments.
          </li>
          <li className="list-item ">
            <span className="font-bold">
              Construction Pathology and Rehabilitation:
            </span>{" "}
            Investigated building pathologies and solutions.
          </li>
          <li className="list-item ">
            <span className="font-bold">Heritage and Digital Cultures:</span>{" "}
            Explored the intersection of heritage with digital advancements.
          </li>
          <li className="list-item ">
            <span className="font-bold">Entrepreneurship and Business:</span>{" "}
            Acquired insights into architectural entrepreneurship.
          </li>
        </ul>
        <br />
        <Txt className="mt-4">
          This international exposure enriched my architectural perspective and
          introduced me to new methodologies and insights from various
          professionals. Here you can find the pathology report produced this
          semester. This was the most challenging work I did in my exchange.
        </Txt>

        <div className="col-span-4 mt-10">
          <PDFPreview
            className="max-w-[700px] mx-auto"
            height={750}
            url="/s5_pathology_report.pdf"
            title="Construction Pathology and Rehabilitation report"
          />
        </div>
      </div>
    </PageGrid>
  );
}

export default FifthSemesterProject;
