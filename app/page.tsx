"use client";

import Hero from "@/components/agency/Hero";
import SectionServices from "@/components/agency/SectionServices";
import SectionAutomation from "@/components/agency/SectionAutomation";
import CTA from "@/components/agency/CTA";
import Footer from "@/components/agency/Footer";
import Navbar from "@/components/agency/Navbar";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <SectionServices />
      <SectionAutomation />
    </main>
  );
}