import Image from "next/image";
import Seo from "@/components/Seo";
export default function HomePage() {
    return (
        <main className="bg-black text-white min-h-screen py-[5rem]">
            <Seo title="SEO i marketing" description="Profesjonalne SEO i marketing dla Twojego biznesu"
                keywords="seo, marketing, biznes, SEO, marketing, SEO dla biznesu, marketing dla biznesu, "
                url="https://bienkowski.dev/seo-marketing"
                city="Drawno"
                entry={{
                    description: "Profesjonalne SEO i marketing dla Twojego biznesu",
                    seo: {
                        street: "ul. słoneczna 10",
                        postalCode: "73-220"
                    }
                }}
                slug="seo-marketing"
            />
            <section className="max-w-[1280px]   py-24 text-white bg-black flex flex-col gap-16 w-full flex items-center mx-auto px-4  ">
                {/* Nagłówki */}
                <div className="flex flex-col gap-6 max-w-4xl  text-center  w-full flex items-center">
                    <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
                        SEO i marketing
                    </h4>
                    <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                        Zwiększ widoczność i sprzedaż online
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent  opacity-80 rounded"></div>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Kompleksowe działania SEO i kampanie marketingowe dostosowane do Twoich celów biznesowych.
                    </p>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Pomagamy pozyskać wartościowy ruch i poprawić konwersje poprzez skuteczne strategie.
                    </p>
                </div>

                {/* Obraz + info */}
                <div className="max-w-6xl  flex flex-col md:flex-row gap-10 items-center  w-full flex items-center">
                    <div className="flex-1 space-y-6 flex flex-col gap-6 items-center">
                        <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                            Co oferujemy?
                        </h2>
                        <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
                            <li>Audyt SEO i optymalizacja techniczna</li>
                            <li>Pozycjonowanie lokalne i globalne</li>
                            <li>Google Ads i kampanie reklamowe</li>
                            <li>Content marketing i analiza słów kluczowych</li>
                            <li>Raportowanie i optymalizacja konwersji</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}