import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Landowners", "/landowners"],
  ["Investors", "/investors"],
  ["Responsible Mining", "/responsible-mining"],
  ["Resources", "/documents"],
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="multiPageSite">
      <header className="multiHeader">
        <Link href="/" className="multiBrand" aria-label="BULTAUN home">
          <img src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited" />
        </Link>
        <nav aria-label="Corporate navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact" className="multiCta">Partner With BULTAUN</Link>
        </nav>
      </header>
      {children}
      <footer className="multiFooter">
        <div className="multiFooterGrid">
          <div className="multiFooterIdentity"><img src="/bultaun-logo.svg" alt="BULTAUN Gold Exports Limited"/><p>Partnership • Integrity • Prosperity</p></div>
          <div><h4>Company</h4><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/news">News</Link></div>
          <div><h4>Partnerships</h4><Link href="/landowners">Landowners</Link><Link href="/investors">Investors</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></div>
          <div><h4>Resources</h4><Link href="/documents">Document Library</Link><Link href="/responsible-mining">Responsible Mining</Link><Link href="/image-credits">Image Credits</Link><Link href="/contact">Supplier Enquiries</Link></div>
        </div>
        <div className="multiFooterBottom"><span>© 2026 BULTAUN GOLD EXPORTS LIMITED.</span><span>Corporate establishment and project-development stage.</span></div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="pageHero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section>;
}

export function Section({ title, children, dark = false }: { title: string; children: ReactNode; dark?: boolean }) {
  return <section className={dark ? "contentSection contentDark" : "contentSection"}><div className="contentWrap"><h2>{title}</h2>{children}</div></section>;
}
