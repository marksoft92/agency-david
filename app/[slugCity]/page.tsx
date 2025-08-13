import { notFound } from "next/navigation";
import { Metadata } from 'next';
import rawDescriptions from '@/data/spawanie_zachodniopomorskie_uslugi.json';
import Link from 'next/link';
import { motion } from "framer-motion";
type ServiceEntry = {
    slugCity: string;
    city: string;
    defCity: string;
    service_slug: string;
    service_name: string;
    description: string;
    cta: string;
    seo: {
        title: string;
        description: string;
        keywords: string;
        postalCode: string;
        street: string;
    };
};

const descriptions = rawDescriptions as ServiceEntry[];

type Props = {
    params: {
        slugCity: any;
    };
};

export async function generateStaticParams() {
    const uslugi = [
        "barierki", "balustrady", "bramy", "ogrodzenia", "konstrukcje-stalowe", "schody"
    ];

    const miasta = [
        'szczecin', 'koszalin', 'kolobrzeg', 'stargard', 'drawsko-pomorskie',
        'swinoujscie', 'police', 'goleniow', 'walcz', 'gryfino', 'szczecinek', 'bialogard',
        'gryfice', 'mysliborz', 'nowogard', 'zlocieniec', 'lobez', 'swidwin', 'choszczno', 'barlinek'
    ];

    return descriptions.map((entry) => ({
        slugCity: `${entry.service_slug}~${entry.slugCity}`,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: any;
}): Promise<Metadata> {
    const [slug, city] = params.slugCity.split('~');
    const resolvedParams = params;
    const locale = resolvedParams.locale;

    const entry = descriptions.find(
        (item) => item.slugCity === city && item.service_slug === slug
    );

    if (!entry) notFound(); // 🔴 Ważne: 404 jeśli brak danych

    return {
        title: entry.seo.title,
        keywords: entry.seo.keywords,
        description: entry.seo.description,
        openGraph: {
            title: entry.seo.title,
            description: entry.seo.description,
            images: ['https://bienkowski.dev/assets/images/bienkowski.png'],
        },
        alternates: {
            canonical: `https://bienkowski.dev/${slug}~${city}`,
        },
    };
}

export default function Page({ params }: any) {
    const [slug, city] = params.slugCity.split('~');

    const entry = descriptions.find(
        (item) => item.slugCity === city && item.service_slug === slug
    );

    if (!entry) notFound(); // 🔴 Ważne: 404 jeśli brak danych

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Bieńkowski.Dev",
        "image": "https://bienkowski.dev/assets/images/bienkowski.png",
        "@id": "https://bienkowski.dev",
        "url": `https://bienkowski.de//${slug}~${city}`,
        "telephone": "+48 606523703",
        "priceRange": "500–10000 PLN",
        "description": entry.description,
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61579197578088",
            "https://www.instagram.com/bienkowski.dev",
            "https://www.google.com/maps/place/ul.+sloneczna+10,+73-220+Drawno"
        ],

        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ul. Słoneczna 10",
            "addressLocality": "Drawno",
            "postalCode": "73-220",
            "addressCountry": {
                "@type": "Country",
                "name": "Poland"
            }
        },
        "hasMap": `https://www.google.com/maps/place/${encodeURIComponent(
            `${entry.seo.street}, ${entry.city}, ${entry.seo.postalCode}`
        )}`,
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": entry.city
            },
            {
                "@type": "AdministrativeArea",
                "name": "Zachodniopomorskie"
            }
        ]
    };


    return (
        <section className="max-w-[1280px] mx-auto px-4 py-24 flex flex-col gap-16">

            {/* Nagłówek z kategorią i tytułem */}
            <div className="flex flex-col gap-6">
                <h4 className="text-green-500 text-sm font-semibold uppercase tracking-[4px]">
                    {/* Przykładowo "Usługi: " + kategoria */}
                    Usługi: {entry.service_name}
                </h4>
                <h2 className="text-white text-[4rem] leading-[1.1] font-oswald font-bold uppercase max-lg:text-[2.5rem]">
                    {entry.city} — {entry.service_name}
                </h2>
                <div className="w-[12%] h-[5px] bg-gradient-to-r from-green-500 to-transparent opacity-80 mb-2" />
                <p className="text-[#A5A5A5] text-[1.25rem] leading-[2.1rem] tracking-wide max-w-[80ch] font-raleway">
                    {/* Opis 1 */}
                    {entry.description ?? entry.description}
                </p>
            </div>

            {/* Sekcja korzyści */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[2rem] text-white font-semibold uppercase">
                        Dlaczego warto wybrać nasze usługi w {entry.defCity}?
                    </h2>
                    <div className="w-[12%] h-[5px] bg-gradient-to-r from-green-500 to-transparent opacity-80 mb-2" />
                    <ul className="list-disc list-inside text-[#A5A5A5] text-[1.1rem] font-raleway leading-[2rem] tracking-wide">
                        {/* Tu wpisz konkretne korzyści z entry lub na sztywno */}

                        <>
                            <li>Profesjonalne podejście do każdego zlecenia</li>
                            <li>Terminowość i rzetelność</li>
                            <li>Użycie materiałów najwyższej jakości</li>
                            <li>Konkurencyjne ceny</li>
                            <li>Doświadczenie i pasja</li>
                        </>

                    </ul>
                </div>

            </div>

            {/* Sekcja Before / After */}




            <section className="bg-black border-2 border-green-400 py-20 px-6 rounded-3xl max-w-4xl mx-auto text-center text-white shadow-lg shadow-green-600/50 my-[2rem]">
                <h2
                    className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg"
                >
                    {entry.city} {entry.service_name}
                </h2>

                <p
                    className="mb-10 max-w-xl mx-auto text-lg leading-relaxed text-gray-300 drop-shadow"

                >
                    {entry.description ?? "Masz pytania? Skontaktuj się z nami, chętnie pomożemy!"}
                </p>

                <div

                >
                    <Link
                        href="/kontakt"
                        className="inline-block bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold px-10 py-4 rounded-full shadow-lg shadow-green-600 transition-all duration-300
          hover:from-yellow-400 hover:to-green-400 hover:scale-105"
                    >
                        {entry?.cta ?? "Kontakt"}
                    </Link>
                </div>
            </section>





        </section>

        //     <section className="max-w-[1280px] mx-auto px-4 py-24 flex flex-col gap-16">
        //     <div className="bg-gradient-to-r from-green-500 to-[#9e1c12] rounded-xl p-10 text-white flex flex-col items-start gap-4 shadow-xl mt-20">
        //     <h2 className="text-[2.5rem] font-semibold uppercase max-lg:text-[1.8rem]">    {entry.city} {entry.service_name}</h2>
        //     <p className="text-lg font-raleway leading-[2rem]">
        // {entry.description}
        //     </p>
        //     <Link
        //           href="/contact"
        //           className="mt-4 inline-block px-6 py-3 bg-white text-[#EB4036] font-semibold rounded-xl uppercase tracking-wider hover:bg-[#f8f8f8] transition-all duration-200"
        //         >
        //            {entry.cta}
        //         </Link>
        //   </div>
        //   <script
        //         type="application/ld+json"
        //         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        //       />
        //   </section>
    );
}