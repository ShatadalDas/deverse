import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import { CascadiaCode, InriaSans, LibreFranklin } from "@/fonts";

export const metadata: Metadata = {
  title: "Deverse",
  description: "A Social Media platform for developers",
  applicationName: "Deverse"
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html
      lang="en"
      className={`${CascadiaCode.variable} ${InriaSans.variable} ${LibreFranklin.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
