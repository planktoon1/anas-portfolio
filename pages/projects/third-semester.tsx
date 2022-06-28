import { PageGrid } from "../../components/layout/PageGrid/PageGrid";
import { ImagePreview } from "../../components/shared/ImagePreview";
import { PDFPreview } from "../../components/shared/PDFPreview";
import { Txt, TxtVariant } from "../../components/shared/Text";

function ThirdSemesterProject() {
  return (
    <PageGrid className="mt-16">
      <ImagePreview
        className="my-auto col-span-2"
        src="/render.jpg"
        title="Rendering"
      />
      <ImagePreview
        className="col-span-2"
        src="/plandrawing.png"
        title="Plan drawing"
      />
      <Txt variant={TxtVariant.H1} className="!mt-20">
        Third Semester Project{" "}
      </Txt>
      <Txt variant={TxtVariant.H2} className="!-mt-2">
        Prefabrication and Industry
      </Txt>
      <div className="col-span-4">
        <Txt>
          Throughout the 3d semester of my ATCM study I have worked with
          prefabrication and industry.
        </Txt>
        <Txt>
          Here I focused on concrete sandwich elements and wooden elements,
          keeping in mind that the more mass production of building components
          the better.
        </Txt>
      </div>
      <Txt variant={TxtVariant.H2} className="mt-8">
        Outline Proposal
      </Txt>
      <div className="col-span-2">
        <Txt>
          In this phase we were presented with our semester project as a design
          office. In our case work the community of Horsens wanted to build a
          Multi Purpose Sports Hall with space for a canteen, meeting rooms,
          locker rooms, a gym for playing badminton, toilets and an office.
        </Txt>
        <br />
        <Txt>
          Horsens kommune forwarded us a finished design drawing of the building
          so we could make the changes necessary for getting a building permit.
        </Txt>
        <Txt>
          They asked us to keep the design, amount of rooms and square meters of
          rooms the same, but to change the geometry of the Administration
          building to a more rectangular shape. In this phase we were dealing
          with fire, width, usability requirements and keeping in mind that
          accessibility for disabled people was a must.
        </Txt>
      </div>
      <ImagePreview
        className="col-span-2 xl:w-96 justify-self-center"
        src="/outline_design_change.png"
        title="Design change"
      />
      <Txt variant={TxtVariant.H2} className="mt-8">
        Project Proposal
      </Txt>

      <div className="col-span-4">
        <Txt>
          Horsens kommune had specific material usage requirements: they would
          like the administration building to be made of wood and the sports
          building to be made of concrete. Since this semester was all about pre
          fabrication, we went with facade elements of wood and of concrete.
        </Txt>
        <Txt>
          This phase was about figuring out the connecting details both between
          wooden components and concrete components and also between wooden and
          concrete components.
        </Txt>
      </div>
      <div className="col-span-4 lg:col-span-2 flex flex-col">
        <Txt variant={TxtVariant.Quote} className="my-8">
          “How to connect a component to another and what is the best solution
          we can have in this specific case?”
        </Txt>
        <Txt>
          This was the question we kept in mind throughout the entire Project
          Proposal phase. Here we also looked deeper into building services such
          as water, heating, ventilation and sewege plans. We made cross
          sections and elevations for better understanding of the levels we were
          working with.
        </Txt>
      </div>
      <div className="col-span-4 lg:col-span-2">
        <PDFPreview
          height={400}
          url="/pp_details.pdf"
          title="Project proposal details"
        />
      </div>
      <Txt variant={TxtVariant.H3} className="mt-4">
        Project Proposal documents
      </Txt>
      <PDFPreview
        height={230}
        url="/pp_elevations.pdf"
        title="Elevations"
        className="col-span-2 lg:col-span-1"
      />
      <PDFPreview
        height={230}
        className="col-span-2 lg:col-span-1"
        url="/pp_deck_element_plan.pdf"
        title="Deck Element Plan"
      />
      <PDFPreview
        height={230}
        className="col-span-2 lg:col-span-1"
        url="/pp_water_plans.pdf"
        title="Water Plans"
      />
      <PDFPreview
        height={230}
        className="col-span-2 lg:col-span-1"
        url="/pp_time_schedule.pdf"
        title="Time Schedule MS Project"
      />
      <Txt variant={TxtVariant.H2} className="mt-12">
        Regulatory Phase
      </Txt>
      <Txt className="col-span-4">
        In this phase we prepared the building permit application to be sent to
        the kommune for approval. When approved we then moved foward to the next
        phase
      </Txt>
      <div className="col-span-4">
        <PDFPreview
          className="max-w-[400px] mx-auto"
          height={500}
          url="/pp_building_permit_app.pdf"
          title="Building permit application"
        />
      </div>
      <br />
      <Txt variant={TxtVariant.H2} className="mb-6">
        Tender Project
      </Txt>
      <PDFPreview
        smallTitle
        className="col-span-4 lg:col-span-2"
        height={600}
        url="/t_Tender_Letter.pdf"
        title="Tender letter"
      />
      <div className="col-span-4 lg:col-span-2 flex flex-col">
        <Txt>
          This phase was all about the exchange between our documents and Århus
          students’ documents. Here we were no longer acting as a design office,
          but as a mounting company.
        </Txt>
        <Txt>
          We sent our invitations letters for the bids and we got the same from
          Århus. From now on we started working on Århus’ project instead of the
          one we started the semester with.
        </Txt>
        <PDFPreview
          url="/t_Bid_Lists.pdf"
          title="Tender bid list"
          className="mt-4"
          height={444}
        />
      </div>
      <br />
      <Txt variant={TxtVariant.H2}>Production Phase</Txt>
      <div className="col-span-4 lg:col-span-2 mb-6 lg:mb-2">
        <Txt>
          After scrutinizing the documents received from Århus campus, we each
          decided on a concrete element we would like to produce.
        </Txt>
        <Txt>
          Here we were acting as a production company. The entirety of this
          phase was regarding the production of the element of our choice. Here
          we worked with 3D modeling from start to finish and we went deep into
          how to produce a concrete element, what to add to it, which are the
          steps from formwork to finished element.
        </Txt>
        <Txt>
          We also spent time doing a plan for insulation cut in order to
          minimize waste. All the information we learned during this phase and
          all the documentation produced were assembled onto a booklet.
        </Txt>
      </div>
      <PDFPreview
        smallTitle
        className="col-span-4 lg:col-span-2"
        url="/p_Manufacturing_booklet.pdf"
        title="Manufacturing booklet"
      />
      <br />
      <Txt variant={TxtVariant.H2}>Construction phase</Txt>
      <Txt className="col-span-4">
        After our booklet was done we then proceeded to the mounting or
        construction phase. Here we act again as a mounting company and we are
        now dealing with logistics on site. We decided on a crane and we made a
        detailed plan containing crane placement, delivery and mounting order of
        elements, temporary bracing and we calculated the price for production
        and mounting.
      </Txt>
      <PDFPreview
        height={500}
        className="col-span-4 lg:col-span-2"
        url="/c_ErectionPlan.pdf"
        title="Erection plan"
      />
      <PDFPreview
        height={500}
        className="col-span-4 lg:col-span-2"
        url="/c_Mounting_delivery_schedule.pdf"
        title="Mounting delivery schedule"
      />
    </PageGrid>
  );
}

export default ThirdSemesterProject;
