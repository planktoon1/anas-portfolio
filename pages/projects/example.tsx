import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function ProjectsExample() {
  return (
    <PageGrid>
      <ImagePreview
        src="/A.png"
        title="This is an AThis is an AThis is an AT"
      />
      <ImagePreview
        src="/N.png"
        title="This is an AThis is an AThis is an AT"
      />
      <ImagePreview
        src="/A.png"
        title="This is an AThis is an AThis is an AT"
      />
      <Txt variant={TxtVariant.H1}>Projects</Txt>
      <Txt className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        mollitia odit? Sequi illo inventore voluptatum aliquid accusamus
        corrupti ducimus veritatis repellat libero veniam. Nobis commodi dolor
        ipsa. Optio, quisquam nostrum! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ea autem sint, facilis nulla nostrum rem quam
        consequatur natus provident error recusandae, doloremque amet quia modi
        ad aperiam ipsa esse eius.
      </Txt>
      <Txt variant={TxtVariant.H2}>Here you can see stuff </Txt>
      <Txt className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        mollitia odit? Sequi illo inventore voluptatum aliquid accusamus
        corrupti ducimus veritatis repellat libero veniam. Nobis commodi dolor
        ipsa. Optio, quisquam nostrum!
      </Txt>
      <Txt className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        mollitia odit? Sequi illo inventore voluptatum aliquid accusamus
        corrupti ducimus veritatis repellat libero veniam. Nobis commodi dolor
        ipsa. Optio, quisquam nostrum! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Maiores qui nisi consequuntur harum quisquam voluptas
        fuga, vitae dolores eius eaque minima suscipit pariatur eligendi
        voluptate enim necessitatibus blanditiis accusantium deserunt?
      </Txt>
      <PDFPreview
        className="col-span-4 md:col-span-2"
        url="../testpdf.pdf"
        title="Stuff"
      />
      <PDFPreview
        className="col-span-4 md:col-span-2"
        url="../testpdf.pdf"
        title="Other stuff"
      />
      <br />
      <Txt variant={TxtVariant.H2}>Here you can see stuff </Txt>
      <Txt className="col-span-4 md:col-span-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        mollitia odit? Sequi illo inventore voluptatum aliquid accusamus
        corrupti ducimus veritatis repellat libero veniam. Nobis commodi dolor
        ipsa. Optio, quisquam nostrum!
      </Txt>
      <PDFPreview
        height={500}
        className="col-span-4 md:col-span-3"
        url="../testpdf.pdf"
        title="Stuff"
      />
      <Txt className="col-span-4 md:col-span-1 row-span-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
        mollitia odit? Sequi illo inventore voluptatum aliquid accusamus
        corrupti ducimus veritatis repellat libero veniam. Nobis commodi dolor
        ipsa. Optio, quisquam nostrum! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Fugiat dolorum dolores odit, voluptatibus similique
        eaque excepturi dolorem amet nobis laudantium sint possimus praesentium
        facilis nam sapiente, cumque iste aliquam iusto!
      </Txt>
    </PageGrid>
  );
}

export default ProjectsExample;
