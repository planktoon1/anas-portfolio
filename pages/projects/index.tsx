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
      <Txt variant={TxtVariant.H2}>
        <Link href={"/projects/third-semester"}>
          <a className="">Third Semester Project</a>
        </Link>
      </Txt>
      <div className="col-span-2">
        <ImagePreview
          src="rendering_above.jpg"
          title="Rendering of third semester project"
        />
      </div>
      <div className="col-span-2">
        <Txt>
          In this project we had to do this and then that. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Consectetur enim aliquid nobis
          nemo nesciunt fugit accusamus
        </Txt>
        <br />
        <Txt>Many learnings later here we are. This was great.</Txt>
      </div>
    </PageGrid>
  );
}

export default Projects;
