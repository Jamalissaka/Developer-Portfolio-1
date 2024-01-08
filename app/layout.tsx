import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://jamal-port.vercel.app/"
  ),
  title: "Jamal Portfolio",
  description: "Developer Portfolio By Jamal Issaka",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Jamal Issaka"],
  openGraph: {
    title: "Jamal Issaka",
    description: "Software Engineer",
    images: "/site-preview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
