"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const routes: Record<string,string> = {
  "About Us":"/about",
  "Services":"/services",
  "Projects":"/projects",
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
    document.querySelectorAll<HTMLAnchorElement>("header a, footer a").forEach((link)=>{
      const label=link.textContent?.trim() || "";
      if(routes[label]) link.href=routes[label];
    });
  },[pathname]);
  return null;
}
