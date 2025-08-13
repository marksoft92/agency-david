

import Hero from "@/components/agency/Hero";
import SectionServices from "@/components/agency/SectionServices";
import SectionAutomation from "@/components/agency/SectionAutomation";
import Navbar from "@/components/agency/Navbar";
import Head from "next/head";

export const metadata = {
  title: "BIENKOWSKI.DEV – Strony i aplikacje webowe, Smart Home",
  description:
    "Tworzymy nowoczesne strony internetowe, aplikacje webowe oraz inteligentne rozwiązania Smart Home. Od pomysłu po wdrożenie – kompleksowa realizacja.",
  keywords: [
    "strony internetowe",
    "aplikacje webowe",
    "smart home",
    "web development",
    "automatyzacje",
    "monitoring",
    "aplikacje mobilne",
  ],
  alternates: {
    canonical: "https://www.bienkowski.dev/",
  },
  openGraph: {
    title: "BIENKOWSKI.DEV – Strony i aplikacje webowe, Smart Home",
    description:
      "Tworzymy nowoczesne strony internetowe, aplikacje webowe oraz inteligentne rozwiązania Smart Home. Od pomysłu po wdrożenie – kompleksowa realizacja.",
    url: "https://www.bienkowski.dev/",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIENKOWSKI.DEV – Strony i aplikacje webowe, Smart Home",
    description:
      "Tworzymy nowoczesne strony internetowe, aplikacje webowe oraz inteligentne rozwiązania Smart Home. Od pomysłu po wdrożenie – kompleksowa realizacja.",
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      </Head>
      <main className="bg-black text-white min-h-screen">
        <Navbar />
        <Hero />
        <SectionServices />
        <SectionAutomation />
      </main>
    </>
  );
}
