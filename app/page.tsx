const services = [
  ["01", "Mining Project Development", "Identifying, assessing and developing commercially viable alluvial mining opportunities with AML holders."],
  ["02", "Operational Management", "Professional planning and supervision of safe, efficient and responsible mining activities."],
  ["03", "Equipment & Infrastructure", "Procurement, mobilisation, maintenance coordination and management of project equipment."],
  ["04", "Gold Recovery", "Appropriate processing systems designed to improve recovery and reduce operational losses."],
  ["05", "Gold Marketing & Export", "Secure coordination of sales, handling, documentation and compliant export pathways."],
  ["06", "Investor Facilitation", "Transparent project information, reporting and engagement with suitable financial partners."],
];

const reasons = [
  ["Landowner Partnerships", "Long-term relationships built on respect, transparency and shared prosperity."],
  ["Mining Expertise", "Professional project development, operational management and technical capability."],
  ["Responsible Development", "A commitment to people, the environment, ethical conduct and regulatory compliance."],
  ["Investor Confidence", "Disciplined governance, clear reporting and a scalable long-term growth strategy."],
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
      <header className="header premiumHeader">
        <a className="brand officialBrand" href="#top" aria-label="BULTAUN home">
          <img className="headerLogo" src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited" />
        </a>
        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#about">About Us</a><a href="#approach">Our Approach</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#landowners">Landowner Partnerships</a><a href="#investors">Investors</a><a href="#contact">Contact</a><a className="navButton" href="#contact">Partner With BULTAUN</a>
        </nav>
      </header>

      <section className="hero heroV2" id="top">
        <div className="heroGlow" /><div className="goldParticles" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <div className="heroContent">
          <p className="eyebrow">Papua New Guinea • Mining Development • Gold Export</p>
          <h1>Developing Papua New Guinea&apos;s Gold Resources <em>Through Partnership</em></h1>
          <p className="heroText">A new model for responsible mining development—bringing together customary landowners, investment capital, professional mining expertise and access to international gold markets.</p>
          <div className="actions"><a className="button gold" href="#about">Explore BULTAUN</a><a className="button outline" href="#landowners">Discuss Your AML</a></div>
          <div className="values"><span>Partnership</span><i/><span>Integrity</span><i/><span>Prosperity</span></div>
        </div>
        <aside className="regionCard glassCard"><span>Initial regional focus</span><strong>Wau–Bulolo</strong><small>Morobe Province, Papua New Guinea</small><div className="regionBadge">Responsible Mining Partnerships</div></aside>
      </section>

      <section className="credibilityStrip"><div><strong>PNG Founded</strong><span>Indigenous mining development vision</span></div><div><strong>Partnership First</strong><span>Customary ownership respected</span></div><div><strong>Professionally Governed</strong><span>Transparency and accountability</span></div><div><strong>Long-Term Focused</strong><span>Building value for generations</span></div></section>

      <section className="section light" id="about">
        <div className="heading"><p className="eyebrow dark">Who we are</p><h2>A Papua New Guinean Mining Development Company</h2></div>
        <div className="twoCol"><div><p className="lead">BULTAUN GOLD EXPORTS LIMITED is being established to build sustainable partnerships between customary landowners, investors and mining professionals.</p><p>Many Alluvial Mining Lease holders possess valuable mining rights and local knowledge but require access to capital, equipment, technical expertise, operational management and reliable markets. BULTAUN is designed to bridge that gap through a professional, transparent and partnership-based model.</p></div><blockquote><span>Our Vision</span>To become Papua New Guinea&apos;s leading indigenous mining development and gold export company.</blockquote></div>
      </section>

      <section className="section whySection" id="approach">
        <div className="heading centered"><p className="eyebrow">Why BULTAUN</p><h2>A Stronger Platform for Responsible Mining Partnerships</h2><p>Combining local legitimacy, professional capability and long-term commercial discipline.</p></div>
        <div className="whyGrid">{reasons.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="section darkSection partnershipModel"><div className="heading centered"><p className="eyebrow">Our partnership model</p><h2>Building Value Together</h2><p>Three contributors. One professionally governed pathway to shared prosperity.</p></div><div className="modelGrid"><article><b>01</b><h3>Customary Landowners</h3><p>Legally recognised mining rights, local knowledge, community relationships and stewardship of the land.</p></article><article className="featured"><b>02</b><h3>BULTAUN</h3><p>Project development, technical expertise, operational management, governance, compliance and market access.</p></article><article><b>03</b><h3>Investors & Partners</h3><p>Development capital, equipment finance, commercial networks and specialist capability.</p></article></div></section>

      <section className="section light" id="services"><div className="heading"><p className="eyebrow dark">What we do</p><h2>From Mining Opportunity to Commercial Operation</h2></div><div className="serviceGrid premiumServices">{services.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more →</a></article>)}</div></section>

      <section className="region" id="projects"><div className="regionVisual mapVisual"><div className="pngOutline">PNG</div><div className="mapMarker wauMarker"><i/>Wau</div><div className="mapMarker buloloMarker"><i/>Bulolo</div><div className="mapLabel">Morobe Province</div></div><div className="regionCopy"><p className="eyebrow">Our initial project region</p><h2>Wau–Bulolo</h2><p className="lead">Beginning in one of Papua New Guinea&apos;s historic gold regions.</p><p>The district offers a proven gold-mining heritage, experienced communities, existing Alluvial Mining Leases and comparatively developed regional infrastructure. BULTAUN aims to become a preferred mining development partner for customary landowners throughout the district.</p><a className="textLink" href="#landowners">Explore partnership opportunities →</a></div></section>

      <section className="landownerSection" id="landowners"><div className="landownerContent"><p className="eyebrow">Landowner partnerships</p><h2>Partnership Begins With Respect</h2><p className="lead">Customary ownership is central to BULTAUN&apos;s development model—not an obstacle to be worked around.</p><p>We seek fair commercial arrangements, transparent communication, local employment, local procurement, community development and long-term relationships built on trust.</p><div className="landownerPoints"><span>Respect customary ownership</span><span>Create local employment</span><span>Support local suppliers</span><span>Share long-term value</span></div><a className="button gold" href="#contact">Discuss Your AML</a></div></section>

      <section className="section light" id="responsibility"><div className="heading centered"><p className="eyebrow dark">Our commitments</p><h2>Responsible Mining, Built Into Every Decision</h2></div><div className="commitmentGrid">{commitments.map(([t,d]) => <article key={t}><div>◆</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="roadmap"><div className="heading"><p className="eyebrow">Long-term direction</p><h2>Building BULTAUN for Generations</h2></div><div className="timeline premiumTimeline"><div><b>2027</b><span>Corporate Establishment</span></div><div><b>2028</b><span>First Project Development</span></div><div><b>2029</b><span>Operational Stabilisation</span></div><div><b>2030–31</b><span>Regional Expansion</span></div><div><b>2032–33</b><span>Gold Export Growth</span></div><div><b>2045</b><span>National Mining Institution</span></div></div></section>

      <section className="investorSection" id="investors"><div className="investorIntro"><p className="eyebrow">Investors & strategic partners</p><h2>Building Confidence Through Professional Governance</h2><p>BULTAUN welcomes preliminary engagement with suitable investors, equipment providers, technical specialists, refiners, logistics partners and financial institutions.</p><a className="button gold" href="#contact">Register Investor Interest</a></div><div className="investorGrid"><article><strong>Partnership Model</strong><span>Structured collaboration with AML holders</span></article><article><strong>Responsible Governance</strong><span>Clear oversight, controls and accountability</span></article><article><strong>Technical Capability</strong><span>Professional mining and project expertise</span></article><article><strong>Long-Term Growth</strong><span>Scalable regional development strategy</span></article></div></section>

      <section className="contact" id="contact"><div><p className="eyebrow dark">Start a conversation</p><h2>Let Us Build Sustainable Prosperity Together</h2><p>We welcome enquiries from AML holders, customary landowner representatives, investors, specialists, suppliers and strategic partners.</p></div><form><label>Full name<input placeholder="Your name"/></label><label>Email address<input type="email" placeholder="name@example.com"/></label><label>Enquiry type<select defaultValue=""><option value="" disabled>Select enquiry type</option><option>Landowner / AML partnership</option><option>Investor interest</option><option>Strategic partnership</option><option>Supplier registration</option><option>General enquiry</option></select></label><label>Organisation<input placeholder="Company, clan or group"/></label><label className="fullField">Message<textarea rows={5} placeholder="Tell us how you would like to work with BULTAUN"/></label><button type="button" className="button darkButton">Submit Enquiry</button><small>Demonstration form — email delivery will be connected before public launch.</small></form></section>

      <footer className="corporateFooter"><div className="footerTop"><div className="footerIdentity"><img className="footerLogoImage" src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited"/><p>Partnership • Integrity • Prosperity</p></div><div><h4>Company</h4><a href="#about">About Us</a><a href="#approach">Our Approach</a><a href="#services">Services</a><a href="#projects">Projects</a></div><div><h4>Partnerships</h4><a href="#landowners">Landowners</a><a href="#investors">Investors</a><a href="#contact">Suppliers</a><a href="#contact">Careers</a></div><div><h4>Resources</h4><a href="#">Company Updates</a><a href="#">Documents</a><a href="#">Frequently Asked Questions</a><a href="#contact">Contact</a></div><div><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Use</a><a href="#">Disclaimer</a><a href="#">Ethical Conduct</a></div></div><div className="footerBottom"><span>© 2026 BULTAUN GOLD EXPORTS LIMITED. All rights reserved.</span><span>Corporate establishment and project-development stage.</span></div></footer>
    </main>
  );
}
