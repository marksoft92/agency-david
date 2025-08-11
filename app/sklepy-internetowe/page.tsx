import Image from "next/image";
import Seo from "@/components/Seo";
export default function HomePage() {
    return (
        <main className="bg-black text-white min-h-screen py-[5rem]">
            <Seo title="Sklepy internetowe" description="Profesjonalne sklepy internetowe dla Twojego biznesu"
                keywords="sklepy, internetowe, biznes, sklepy online, sklepy internetowe, sklepy internetowe dla biznesu, sklepy internetowe dla firmy, "
                url="https://bienkowski.dev/sklepy-internetowe"
                city="Drawno"
                entry={{
                    description: "Profesjonalne sklepy internetowe dla Twojego biznesu",
                    seo: {
                        street: "ul. słoneczna 10",
                        postalCode: "73-220"
                    }
                }}
                slug="sklepy-internetowe"
            />
            <section className="max-w-[1280px]   py-24 text-white bg-black flex flex-col gap-16 w-full flex items-center mx-auto px-4  ">
                {/* Nagłówki */}
                <div className="flex flex-col gap-6 max-w-4xl  text-center  w-full flex items-center">
                    <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
                        Sklepy internetowe
                    </h4>
                    <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                        Skuteczne i funkcjonalne sklepy online
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent  opacity-80 rounded"></div>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Tworzymy intuicyjne i szybkie sklepy internetowe z integracjami płatności i systemów logistycznych.
                    </p>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Zapewniamy wygodę zakupów i bezpieczeństwo transakcji dla Twoich klientów.
                    </p>
                </div>

                {/* Obraz + info */}
                <div className="max-w-6xl  flex flex-col md:flex-row gap-10 items-center  w-full flex items-center">
                    <div className="flex-1 space-y-6 flex flex-col gap-6 items-center">
                        <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                            Co oferujemy?
                        </h2>
                        <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
                            <li>Dedykowane rozwiązania e-commerce</li>
                            <li>Integracje z systemami płatności</li>
                            <li>Systemy zarządzania zamówieniami</li>
                            <li>Responsywność i optymalizacja UX</li>
                            <li>Bezpieczeństwo i wsparcie techniczne</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}