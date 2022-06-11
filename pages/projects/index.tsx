import { PDPPreview } from "../../components/shared/PDFPage";

function Projects() {
  return (
    <div className="h-full">
      <h1>Projects</h1>
      <h2>Here you can see all my projects </h2>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
      mollitia odit? Sequi illo inventore voluptatum aliquid accusamus corrupti
      ducimus veritatis repellat libero veniam. Nobis commodi dolor ipsa. Optio,
      quisquam nostrum!
      <br />
      <br />
      <PDPPreview url="./testpdf.pdf" title="Test 1" />
    </div>
  );
}

export default Projects;
