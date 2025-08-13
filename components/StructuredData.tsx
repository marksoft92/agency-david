import Script from "next/script";

export const StructuredData = () => {
  const baseUrl = `https://bienkowski.dev/`;

  // LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bieńkowski Dawid",
    image: "https://bienkowski.dev/assets/images/logo.png",
    "@id": baseUrl,
    url: baseUrl,
    telephone: "+48 606523703",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Słoneczna 10",
      addressLocality: "Drawno",
      postalCode: "73-220",
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  // Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bienkowski Dev",
    url: "https://www.bienkowski.dev",
    logo: "https://bienkowski.dev/assets/images/logo.png",
    sameAs: [
      "https://www.facebook.com/twoja_strona",
      "https://www.linkedin.com/in/twoj_profil",
      "https://github.com/twoj_github",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48 606523703",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: ["Polish", "English"],
    },
  };

  // WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.bienkowski.dev",
    name: "BIENKOWSKI.DEV",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.bienkowski.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const allSchemas = [localBusinessSchema, organizationSchema, websiteSchema];

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allSchemas),
      }}
    />
  );
};

export default StructuredData;
