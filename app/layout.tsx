import type { Metadata } from "next";
import RouteUpgrade from "./components/RouteUpgrade";
import "./globals.css";
import "./header.css";
import "./logo-fix.css";
import "./enhancements.css";
import "./phase2.css";
import "./phase3.css";
import "./imagery.css";
import "./multipage.css";
import "./photo-integration.css";
import "./gallery.css";
import "./header-premium.css";
import "./mobile-menu.css";

export const metadata: Metadata = {
  title: "BULTAUN Gold Exports Limited",
  description:
    "A Papua New Guinean mining development and gold export company focused on responsible partnerships with customary landowners.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <RouteUpgrade />
        {children}
        <a className="imageCreditLink" href="/image-credits">Image credits</a>
      </body>
    </html>
  );
}
