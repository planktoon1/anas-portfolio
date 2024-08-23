import Link from "next/link";
import { useTranslation } from "react-i18next";
import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function Projects() {
  const { t } = useTranslation();
  return (
    <PageGrid>
      <Txt variant={TxtVariant.H1}>Projects</Txt>
      <Txt variant={TxtVariant.H3}>
        Here you can find all my showcased projects and navigate further into
        them to see all the details of the work.
      </Txt>
      <br />
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/seventh-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/seventh-semester"}>
            <a>Seventh Semester Project</a>
          </Link>
        </Txt>
        <div className="col-span-2">
          <ImagePreview
            src="/seventh-semester/s7_rendering.png"
            title="Daycare centre rendering"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt variant={TxtVariant.H3}>Daycare Centre</Txt>
          <Txt>
            For my 7th semester bachelor project, I collaborated with a
            classmate to develop a daycare centre based on an initial outline
            provided by AART Architects. Our project presented a significant
            degree of difficulty, particularly in addressing the buildability
            aspects of the long overhang terrace and roof.
          </Txt>
          <br />
          <Txt>
            Our focus was on the integration of steel structures, with a
            particular emphasis on the connections between concrete and steel
            elements.
          </Txt>
          <Txt className="mt-8">
            <Link href={"/projects/seventh-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/sixth-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/sixth-semester"}>
            <a>Sixth Semester Project</a>
          </Link>
        </Txt>
        <div className="col-span-2">
          <ImagePreview src="s6_disponering.png" title="Travbyen project" />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt variant={TxtVariant.H3}>
            Travbyen Billund - A sustainable urban development
          </Txt>
          <Txt>
            During my 20-week internship internship semester I had the
            opportunity to work on the Travbyen Project, a wooden construction
            development. My focus throughout this experience was on deepening my
            knowledge of wooden constructions while actively contributing to
            various aspects of the project.
          </Txt>
          <br />
          <Txt>
            I was responsible for 3D modelling buildings and creating detailed
            families for windows and doors. I also played a key role in solving
            technical challenges, such as developing precise sokkel details. And
            more..
          </Txt>
          <Txt className="mt-8">
            <Link href={"/projects/sixth-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/fifth-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/fifth-semester"}>
            <a>Fifth Semester Project</a>
          </Link>
        </Txt>
        <div className="col-span-2">
          <ImagePreview
            src="/ist_tecnico_lisboa.jpg"
            title="ERASMUS at IST Lisboa"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt variant={TxtVariant.H3}>ERASMUS program in Lisbon, Portugal</Txt>
          <Txt>
            During my 5th semester, I participated in the ERASMUS program at
            Instituto Técnico Superior in Lisbon, Portugal, pursuing an
            Integrated Master’s in Architecture.
          </Txt>
          <br />
          <Txt>
            This international exposure enriched my architectural perspective
            and introduced me to new methodologies and insights from various
            professionals.
          </Txt>
          <Txt className="mt-8">
            <Link href={"/projects/fifth-semester"}>
              <a>Expand this to see overview of this semester</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/fourth-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/fourth-semester"}>
            <a>Fourth Semester Project</a>
          </Link>
        </Txt>
        <div className="col-span-2">
          <ImagePreview
            src="/fourth-semester/s4_hero.png"
            title="Forth semester project"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt variant={TxtVariant.H3}>Multistory residential homes</Txt>
          <Txt>
            In this semester I was in a group with 2 erasmus students. One from
            engineering and the other from an architectural bachelor.
          </Txt>
          <br />
          <Txt>
            Together we were able to see our project through different
            perspectives and give value in our own ways considering our
            different backgrounds.
            <br />
            <br />
            This was a new experience for me and I learned how to navigate some
            softwares like “Space Maker” to produce a sun analysis and the
            basics of AutoCad.
          </Txt>
          <Txt className="mt-8">
            <Link href={"/projects/fourth-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/third-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/third-semester"}>
            <a>Third Semester Project</a>
          </Link>
        </Txt>
        <div className="col-span-2">
          <ImagePreview
            src="rendering_above.jpg"
            title="Rendering of third semester project"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt>
            Throughout the 3d semester of my ATCM study I have worked with
            prefabrication and industry.
          </Txt>
          <Txt>
            Here I focused on concrete sandwich elements and wooden elements,
            keeping in mind that the more mass production of building components
            the better.
          </Txt>
          <br />
          <Txt>
            <Link href={"/projects/third-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/second-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/second-semester"}>
            <a>Second Semester Project</a>
          </Link>
        </Txt>
        <div className="max-w-[440px]">
          <ImagePreview
            src="second-semester/s2_hero.jpg"
            title="Rendering of second semester project"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Txt>Single family house with basement basement</Txt>
          <Txt className="mt-8">
            <Link href={"/projects/second-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
      <div className="relative shadow-lg col-span-4 grid gap-4 p-4 border border-opacity-40">
        <div className="absolute top-2 text-text right-4 text-3xl">
          <Link href={"/projects/first-semester"}>
            <a title="Open in new tab">🗖</a>
          </Link>
        </div>
        <Txt variant={TxtVariant.H2}>
          <Link href={"/projects/first-semester"}>
            <a>First Semester Project</a>
          </Link>
        </Txt>
        <div className="max-w-[440px]">
          <ImagePreview
            src="first-semester/s1_hero.png"
            title="Rendering of first semester project"
          />
        </div>
        <div className="flex flex-col">
          <Txt>Single family house</Txt>
          <br />
          <Txt className="mt-6">
            <Link href={"/projects/first-semester"}>
              <a>Expand this to see overview of this project</a>
            </Link>
          </Txt>
        </div>
      </div>
    </PageGrid>
  );
}

export default Projects;
