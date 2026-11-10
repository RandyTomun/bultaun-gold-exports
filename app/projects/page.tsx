import Link from "next/link";
import { PageHero, Section, SiteShell } from "../components/SiteShell";

const pathway = [
  "Initial discussions with customary landowners and alluvial mining leaseholders",
  "Legal, technical, environmental and commercial due diligence",
  "Assessment of the deposit, equipment needs and supporting infrastructure",
  "Agreement on partner responsibilities, approvals and funding",
  "Mobilisation planning once the relevant requirements are met",
];

export default function Projects() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Regional focus"
        title="Wau–Bulolo, Morobe Province"
        intro="BULTAUN’s initial focus is assessing alluvial gold opportunities with customary landowners and leaseholders in the Wau–Bulolo district."
      />
      <Section title="Project development status">
        <p className="lead">Our current focus is partnership engagement and project assessment. BULTAUN will share specific project milestones through company updates when they are confirmed.</p>
        <Link className="homeTextLink" href="/news">Company updates <span aria-hidden="true">↗</span></Link>
      </Section>
      <Section dark title="How an opportunity progresses">
        <ol className="projectPathway">
          {pathway.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <Link className="pageCta" href="/landowners">Explore landowner partnerships</Link>
      </Section>
    </SiteShell>
  );
}
