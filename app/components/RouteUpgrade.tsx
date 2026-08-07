"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const routes: Record<string,string> = {
  "About Us":"/about",
  "Services":"/services",
  "Projects":"/projects",
  "Gallery":"/gallery",
  "Landowner Partnerships":"/landowners",
  "Landowners":"/landowners",
  "Investors":"/investors",
  "Responsible Mining":"/responsible-mining",
  "Documents":"/documents",
  "Company Updates":"/news",
  "Careers":"/careers",
  "Suppliers":"/suppliers",
  "Contact":"/contact",
  "Partner With BULTAUN":"/contact",
};

const homeMobileItems = [
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/#approach" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Landowner Partnerships", href: "/landowners" },
  { label: "Investors", href: "/investors" },
  { label: "Responsible Mining", href: "/responsible-mining" },
  { label: "Contact", href: "/contact" },
];

export default function RouteUpgrade(){
  const pathname=usePathname();
  useEffect(()=>{
    if(pathname!=="/") return;
    document.querySelectorAll<HTMLAnchorElement>("header a, footer a").forEach((link)=>{
      const label=link.textContent?.trim() || "";
      if(routes[label]) link.href=routes[label];
    });
  },[pathname]);

  if(pathname !== "/") return null;
  return <div className="homeMobileMenu"><MobileMenu items={homeMobileItems} /></div>;
}
