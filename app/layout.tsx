import Header from "@/components/Header";

import type { Metadata } from "next";


import { Hubot_Sans } from 'next/font/google'
import { notFound } from "next/navigation";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleRecaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import CookieBanner from "@/components/CookieBanner";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GTMHead from "@/components/GTMHead";
import GTMNoScript from "@/components/GTMNoScript";
import StructuredData from "@/components/StructuredData";




const hubotSans = Hubot_Sans({
  subsets: ['latin'],
  variable: '--font-hubot',
})


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { };
}>) {
  




  return (
    <html lang={'pl'}>
      <head>
        {/* <GTMHead /> */}
      </head>
      <body
        className={`${hubotSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-hubot), sans-serif" }}
      >
        <Suspense fallback={null}>
          {/* <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} /> */}
          {/* <StructuredData locale={locale} /> */}
        </Suspense>
        {/* <GTMNoScript /> */}

          <Header />
          {children}
          {/* <GoogleRecaptchaWrapper>{children}</GoogleRecaptchaWrapper> */}
          <Footer />
          {/* <CookieBanner locale={locale} /> */}

      </body>
    </html>
  );
}
