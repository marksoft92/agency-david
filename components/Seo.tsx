// components/Seo.tsx
import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  url: string;
  locale?: string;
  image?: string;
  canonical?: string;
  slug: string;
  city: string;
  entry: {
    description: string;
    seo: {
      street: string;
      postalCode: string;
    };
  };
};

export default function Seo({
  title,
  description,
  keywords,
  url,
  locale = 'pl',
  image = 'https://bienkowski.dev/assets/images/logo.png',
  canonical,
  slug,
  city,
  entry,
}: SeoProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bieńkowski Dawid",
    image: "https://bienkowski.dev/assets/images/logo.png",
    "@id": "https://bienkowski.dev",
    url: `https://bienkowski.dev/pl/${slug}~${city}`,
    telephone: "+48 606523703",
    priceRange: "500–10000 PLN",
    description: entry.description,
    sameAs: [
      "https://www.facebook.com/bienkowski.dev",
      "https://www.instagram.com/bienkowski.dev",
      "https://www.google.com/maps/place/ul.+słoneczna+10,+73-220+Drawno",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. słoneczna 10",
      addressLocality: "Drawno",
      postalCode: "73-220",
      addressCountry: {
        "@type": "Country",
        name: "Poland",
      },
    },
    hasMap: `https://www.google.com/maps/place/${encodeURIComponent(
      `${entry.seo.street}, ${city}, ${entry.seo.postalCode}`
    )}`,
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
    areaServed: [
      {
        "@type": "City",
        name: city,
      },
      {
        "@type": "AdministrativeArea",
        name: "Zachodniopomorskie",
      },
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical || url} />
      <meta name="author" content="Bieńkowski Dawid" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Bieńkowski Dawid`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="bienkowski.dev" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Bieńkowski Dawid`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Hreflangs */}
      <link rel="alternate" href="https://bienkowski.dev/pl/blog" hrefLang="pl" />
      <link rel="alternate" href="https://bienkowski.dev/en/blog" hrefLang="en" />
      <link rel="alternate" href="https://bienkowski.dev/de/blog" hrefLang="de" />
      <link rel="alternate" href="https://bienkowski.dev/pl/blog" hrefLang="x-default" />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
