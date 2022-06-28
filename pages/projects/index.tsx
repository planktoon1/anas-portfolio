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
    </PageGrid>
  );
}

export default Projects;
