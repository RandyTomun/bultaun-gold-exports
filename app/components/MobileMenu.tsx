"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type MobileMenuItem = {
  label: string;
  href: string;
};

export default function MobileMenu({ items, ctaHref = "/contact", ctaLabel = "Partner With BULTAUN" }: { items: MobileMenuItem[]; ctaHref?: string; ctaLabel?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("mobileMenuOpen", open);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("mobileMenuOpen");
    };
  }, [open]);

  return (
    <div className="mobileMenuRoot">
      <button
        type="button"
        className={`mobileMenuButton ${open ? "isOpen" : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobileMenuPanel ${open ? "isOpen" : ""}`} id="mobile-site-navigation">
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="mobileMenuCta" href={ctaHref} onClick={() => setOpen(false)}>
            {ctaLabel}
          </Link>
        </nav>
      </div>
      {open && <button className="mobileMenuBackdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </div>
  );
}
