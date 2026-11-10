import Link from "next/link";
import { PageHero, Section, SiteShell } from "../components/SiteShell";

export default function Contact() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact BULTAUN"
        title="Partnership enquiries"
        intro="BULTAUN welcomes preliminary enquiries from customary landowner representatives, alluvial mining leaseholders, investors, suppliers and technical partners."
      />
      <Section title="Enquiry information">
        <p className="lead">BULTAUN will publish its official contact details here once they are confirmed. Online submissions are currently unavailable.</p>
        <div className="contentGrid">
          <article className="contentCard">
            <h3>Landowners & leaseholders</h3>
            <p>Learn how BULTAUN approaches initial discussions with landowner representatives and alluvial mining leaseholders.</p>
            <Link className="homeTextLink" href="/landowners">Landowner partnerships <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="contentCard">
            <h3>Investors & strategic partners</h3>
            <p>Read about the company’s proposed approach to due diligence, governance and project development.</p>
            <Link className="homeTextLink" href="/investors">Strategic partnerships <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="contentCard">
            <h3>Suppliers & contractors</h3>
            <p>See the equipment, technical services and other capabilities relevant to future projects.</p>
            <Link className="homeTextLink" href="/suppliers">Supplier opportunities <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </Section>
    </SiteShell>
  );
}
