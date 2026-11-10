import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

const audiences = [
  {
    id: "landowners",
    title: "Landowners & leaseholders",
    description: "Start with customary ownership, community priorities and the information needed to assess an alluvial mining opportunity.",
    label: "Explore landowner partnerships",
    href: "/landowners",
  },
  {
    id: "investors",
    title: "Investors & strategic partners",
    description: "Learn how BULTAUN approaches project assessment, commercial terms and governance before committing capital.",
    label: "Explore strategic partnerships",
    href: "/investors",
  },
  {
    id: "suppliers",
    title: "Suppliers & technical partners",
    description: "See where equipment, field services and specialist expertise fit into the project-development process.",
    label: "Explore supplier opportunities",
    href: "/suppliers",
  },
];

const steps = [
  ["Listen & understand", "Discuss customary ownership, local priorities and the opportunity with landowner representatives and leaseholders."],
  ["Assess the opportunity", "Review technical, commercial, environmental and regulatory requirements before deciding how to proceed."],
  ["Agree on next steps", "Define partner roles, approvals, funding and responsibilities before planning mobilisation."],
];

export default function Home() {
  return (
    <SiteShell>
      <div className="bultaunHome">
        <section className="homeHero" id="top">
          <div className="homeFrame homeHeroInner">
            <div className="homeHeroCopy">
              <p className="eyebrow">Papua New Guinea · Alluvial Gold</p>
              <h1>Developing gold projects <em>through partnership</em></h1>
              <p className="homeHeroIntro">
                BULTAUN brings customary landowners, technical specialists and commercial partners together to assess and develop alluvial gold opportunities in Papua New Guinea.
              </p>
              <div className="homeActions">
                <Link className="button gold" href="/landowners">For landowners</Link>
                <Link className="button outline" href="/projects">Explore our regional focus</Link>
              </div>
            </div>
            <Link className="homeHeroLocation" href="/projects">
              <span>Initial regional focus</span>
              <strong>Wau–Bulolo</strong>
              <span>Morobe Province, PNG</span>
            </Link>
          </div>
        </section>

        <section className="homeFrame homeAudience" id="about" aria-labelledby="partnership-heading">
          <div className="homeSectionHeading">
            <p className="eyebrow">Working with BULTAUN</p>
            <h2 id="partnership-heading">Mining partnerships and opportunities</h2>
          </div>
          <div className="homeAudienceGrid">
            {audiences.map(({ id, title, description, label, href }, index) => (
              <article className="homeAudienceCard" id={id} key={id}>
                <span className="homeIndex" aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="homeTextLink" href={href}>{label} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section className="homeRegion" id="projects">
          <div className="homeFrame homeRegionGrid">
            <figure>
              <img src="/river-landscape.jpg" alt="Rocky river channel surrounded by vegetation" width={1400} height={1050} loading="lazy" />
              <figcaption>Illustrative river landscape</figcaption>
            </figure>
            <div>
              <p className="eyebrow">Regional focus</p>
              <h2>Wau–Bulolo, Morobe Province</h2>
              <p>Our initial focus is alluvial gold project development in the Wau–Bulolo district. Early discussions bring together community priorities, the needs of leaseholders and the practical requirements of developing a project.</p>
              <dl className="homeStatus">
                <dt>Current focus</dt>
                <dd>Partnership engagement and project assessment</dd>
              </dl>
              <Link className="homeTextLink" href="/projects">Explore the regional focus <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="homeFrame homeProcess" id="approach" aria-labelledby="approach-heading">
          <div className="homeSectionHeading">
            <p className="eyebrow">Our approach</p>
            <h2 id="approach-heading">How we assess a mining opportunity</h2>
          </div>
          <ol>
            {steps.map(([title, description], index) => (
              <li key={title}>
                <span className="homeIndex" aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <div className="homeActions">
            <Link className="homeTextLink" href="/services" id="services">Planned services <span aria-hidden="true">↗</span></Link>
            <Link className="homeTextLink" href="/responsible-mining" id="responsibility">Responsible mining commitments <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="homeContact" id="contact">
          <div className="homeFrame homeContactInner">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Partnership enquiries</h2>
              <p>Find contact information for landowner, supplier and strategic partnership enquiries.</p>
            </div>
            <Link className="button gold" href="/contact">View enquiry information</Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
