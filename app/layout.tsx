import type { Metadata } from "next";
import "./globals.css";
import "./header.css";
import "./logo-fix.css";
import "./enhancements.css";
import "./phase2.css";
import "./phase3.css";

export const metadata: Metadata = {
  title: "BULTAUN Gold Exports Limited",
  description:
    "A Papua New Guinean mining development and gold export company focused on responsible partnerships with customary landowners.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
