"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type MobileMenuItem = {
  label: string;
  href: string;
};

export default function MobileMenu({ items, ctaHref = "/contact", ctaLabel = "Partner With BULTAUN" }: { items: MobileMenuItem[]; ctaHref?: string; ctaLabel?: string }) {
  const [open, setOpen] = useState(false);

  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 1181px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    document.body.classList.add("mobileMenuOpen");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.classList.remove("mobileMenuOpen");
    };
  }, [open]);

  return (
    <div className="mobileMenuRoot">
      <button
        type="button"
        ref={toggle}
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

      <div className={`mobileMenuPanel ${open ? "isOpen" : ""}`} id="mobile-site-navigation" inert={!open}>
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
      {open && <button className="mobileMenuBackdrop" tabIndex={-1} aria-label="Close navigation" onClick={() => { setOpen(false); toggle.current?.focus(); }} />}
    </div>
  );
}
