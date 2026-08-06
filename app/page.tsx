const services = [
  ["01", "Mining Project Development", "Identifying, assessing and developing commercially viable alluvial mining opportunities with AML holders."],
  ["02", "Operational Management", "Professional planning and supervision of safe, efficient and responsible mining activities."],
  ["03", "Equipment & Infrastructure", "Procurement, mobilisation, maintenance coordination and management of project equipment."],
  ["04", "Gold Recovery", "Appropriate processing systems designed to improve recovery and reduce operational losses."],
  ["05", "Gold Marketing & Export", "Secure coordination of sales, handling, documentation and compliant export pathways."],
  ["06", "Investor Facilitation", "Transparent project information, reporting and engagement with suitable financial partners."],
];

const commitments = [
  ["Safety First", "Protecting employees, contractors, landowners, communities and partners."],
  ["Environmental Stewardship", "Responsible management of water, land disturbance, waste and rehabilitation."],
  ["Ethical Conduct", "Operating honestly, transparently and in accordance with applicable laws."],
  ["Professional Governance", "Clear accountability, disciplined decision-making and financial controls."],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand officialBrand" href="#top" aria-label="BULTAUN home">
          <img className="headerLogo" src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a><a href="#approach">Our Approach</a><a href="#services">Services</a>
          <a href="#region">Wau–Bulolo</a><a href="#responsibility">Responsible Mining</a>
          <a className="navButton" href="#contact">Partner With BULTAUN</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="heroContent">
          <p className="eyebrow">Papua New Guinea • Mining Development • Gold Export</p>
          <h1>Developing Papua New Guinea&apos;s Gold Resources <em>Through Partnership</em></h1>
          <p className="heroText">A new model for responsible mining development—bringing together customary landowners, investment capital, professional mining expertise and access to international gold markets.</p>
          <div className="actions"><a className="button gold" href="#about">Explore BULTAUN</a><a className="button outline" href="#contact">Discuss a Partnership</a></div>
          <div className="values"><span>Partnership</span><i/><span>Integrity</span><i/><span>Prosperity</span></div>
        </div>
        <aside className="regionCard"><span>Initial regional focus</span><strong>Wau–Bulolo</strong><small>Morobe Province, Papua New Guinea</small></aside>
      </section>

      <section className="trustStrip" aria-label="Corporate priorities">
        <span>Customary ownership respected</span><span>Transparent governance</span><span>Responsible gold pathways</span><span>Long-term PNG value</span>
      </section>

      <section className="section light" id="about">
        <div className="heading"><p className="eyebrow dark">Who we are</p><h2>A Papua New Guinean Mining Development Company</h2></div>
        <div className="twoCol">
          <div><p className="lead">BULTAUN GOLD EXPORTS LIMITED is being established to build sustainable partnerships between customary landowners, investors and mining professionals.</p><p>Many Alluvial Mining Lease holders possess valuable mining rights and local knowledge but require access to capital, equipment, technical expertise, operational management and reliable markets. BULTAUN is designed to bridge that gap through a professional, transparent and partnership-based model.</p></div>
          <blockquote><span>Our Vision</span>To become Papua New Guinea&apos;s leading indigenous mining development and gold export company.</blockquote>
        </div>
      </section>

      <section className="section darkSection" id="approach">
        <div className="heading centered"><p className="eyebrow">Our partnership model</p><h2>Building Value Together</h2><p>Three contributors. One professionally governed pathway to shared prosperity.</p></div>
        <div className="modelGrid">
          <article><b>01</b><h3>Customary Landowners</h3><p>Legally recognised mining rights, local knowledge, community relationships and stewardship of the land.</p></article>
          <article className="featured"><b>02</b><h3>BULTAUN</h3><p>Project development, technical expertise, operational management, governance, compliance and market access.</p></article>
          <article><b>03</b><h3>Investors & Partners</h3><p>Development capital, equipment finance, commercial networks and specialist capability.</p></article>
        </div>
      </section>

      <section className="section light" id="services">
        <div className="heading"><p className="eyebrow dark">What we do</p><h2>From Mining Opportunity to Commercial Operation</h2></div>
        <div className="serviceGrid">{services.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="region" id="region">
        <div className="regionVisual"><div className="mountains">▲ ▲</div><div className="riverLine"/><span className="regionBadge">Morobe Province</span></div>
        <div className="regionCopy"><p className="eyebrow">Our initial focus</p><h2>Wau–Bulolo</h2><p className="lead">Beginning in one of Papua New Guinea&apos;s historic gold regions.</p><p>The district offers a proven gold-mining heritage, experienced communities, existing Alluvial Mining Leases and comparatively developed regional infrastructure. BULTAUN aims to become a preferred mining development partner for customary landowners throughout the district.</p><a className="textLink" href="#contact">Discuss a Wau–Bulolo opportunity →</a></div>
      </section>

      <section className="section light" id="responsibility">
        <div className="heading centered"><p className="eyebrow dark">Our commitments</p><h2>Responsible Mining, Built Into Every Decision</h2></div>
        <div className="commitmentGrid">{commitments.map(([t,d]) => <article key={t}><div>◆</div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="pathways" aria-label="Partnership pathways">
        <article>
          <p className="eyebrow">For AML holders & landowners</p>
          <h2>Develop Your Mining Opportunity With a Professional Partner</h2>
          <p>Begin a confidential discussion about your lease, project objectives, community expectations and development requirements.</p>
          <a className="button gold" href="#contact">Submit a Mining Opportunity</a>
        </article>
        <article>
          <p className="eyebrow">For investors & strategic partners</p>
          <h2>Help Build Responsible Mining Projects in Papua New Guinea</h2>
          <p>Engage with BULTAUN regarding project capital, equipment, technical services, refining, logistics and institutional partnerships.</p>
          <a className="button outline" href="#contact">Register Strategic Interest</a>
        </article>
      </section>

      <section className="roadmap">
        <div className="heading"><p className="eyebrow">Long-term direction</p><h2>Building BULTAUN for Generations</h2></div>
        <div className="timeline"><div><b>2027</b><span>Corporate Establishment</span></div><div><b>2028</b><span>First Project Development</span></div><div><b>2029</b><span>Operational Stabilisation</span></div><div><b>2030–31</b><span>Regional Expansion</span></div><div><b>2032–33</b><span>Gold Export Growth</span></div><div><b>2045</b><span>National Mining Institution</span></div></div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow dark">Start a conversation</p><h2>Let Us Build Sustainable Prosperity Together</h2><p>We welcome enquiries from AML holders, customary landowner representatives, investors, specialists, suppliers and strategic partners.</p><div className="contactTags"><span>Landowner partnerships</span><span>Investor relations</span><span>Technical partners</span><span>Suppliers</span></div></div>
        <form><label>Full name<input placeholder="Your name" /></label><label>Email address<input type="email" placeholder="name@example.com" /></label><label>Enquiry type<select defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Landowner / AML partnership</option><option>Investor interest</option><option>Strategic partnership</option><option>General enquiry</option></select></label><label>Organisation<input placeholder="Company, group or organisation" /></label><label className="fullField">Message<textarea rows={5} placeholder="Tell us how you would like to work with BULTAUN" /></label><button type="button" className="button darkButton">Submit Enquiry</button><small>Demonstration form — email delivery will be connected before launch.</small></form>
      </section>

      <footer className="siteFooter">
        <div className="footerPrimary"><div><div className="footerLogo"><img className="footerLogoImage" src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited" /></div><p className="footerMotto">Partnership • Integrity • Prosperity</p></div><div><h3>Company</h3><a href="#about">About BULTAUN</a><a href="#approach">Our Approach</a><a href="#services">Services</a></div><div><h3>Engage</h3><a href="#contact">Landowner Enquiries</a><a href="#contact">Investor Relations</a><a href="#contact">Strategic Partnerships</a></div><div><h3>Commitment</h3><a href="#responsibility">Responsible Mining</a><a href="#region">Wau–Bulolo</a><a href="#contact">Contact</a></div></div>
        <div className="footerBottom"><span>© 2026 BULTAUN GOLD EXPORTS LIMITED. All rights reserved.</span><span>Corporate establishment and project-development stage.</span></div>
      </footer>
    </main>
  );
}
