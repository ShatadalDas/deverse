import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import { CascadiaCode, InriaSans, LibreFranklin } from "@/fonts";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Deverse",
  description: "A Social Media platform for developers",
  applicationName: "Deverse",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={`${CascadiaCode.variable} ${InriaSans.variable} ${LibreFranklin.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
