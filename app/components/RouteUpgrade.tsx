"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const routes: Record<string,string> = {
  "About Us":"/about",
  "Services":"/services",
  "Projects":"/projects",
  "Gallery":"/gallery",
  "Media Gallery":"/gallery",
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

export default function RouteUpgrade(){
  const pathname=usePathname();
  useEffect(()=>{
    if(pathname!=="/") return;

    const headerNav=document.querySelector<HTMLElement>("header nav");
    if(headerNav && !headerNav.querySelector('a[href="/gallery"]')){
      const gallery=document.createElement("a");
      gallery.href="/gallery";
      gallery.textContent="Gallery";
      const landowners=[...headerNav.querySelectorAll("a")].find((link)=>link.textContent?.trim()==="Landowner Partnerships");
      headerNav.insertBefore(gallery, landowners || headerNav.querySelector(".navButton"));
    }

    const resourcesHeading=[...document.querySelectorAll("footer h4")].find((heading)=>heading.textContent?.trim()==="Resources");
    const resourcesColumn=resourcesHeading?.parentElement;
    if(resourcesColumn && !resourcesColumn.querySelector('a[href="/gallery"]')){
      const gallery=document.createElement("a");
      gallery.href="/gallery";
      gallery.textContent="Media Gallery";
      resourcesHeading?.insertAdjacentElement("afterend",gallery);
    }

    document.querySelectorAll<HTMLAnchorElement>("header a, footer a").forEach((link)=>{
      const label=link.textContent?.trim() || "";
      if(routes[label]) link.href=routes[label];
    });
  },[pathname]);
  return null;
}
