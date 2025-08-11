import Image from "next/image";
import Seo from "@/components/Seo";
export default function HomePage() {
    return (
        <main className="bg-black text-white min-h-screen py-[5rem]">
            <Seo title="Monitoring i Kamery IP" description="Profesjonalne systemy monitoringu dla Twojego bezpieczeństwa"
                keywords="monitoring, kamery, ip, bezpieczeństwo, automatyka domu, bcs, bcs monitoring, bcs kamery ip, ochrona domu, ochrona mieszkania, ochrona biura, ochrona firmy"
                url="https://bienkowski.dev/monitoring"
                city="Drawno"
                entry={{
                    description: "Profesjonalne systemy monitoringu dla Twojego bezpieczeństwa",
                    seo: {
                        street: "ul. słoneczna 10",
                        postalCode: "73-220"
                    }
                }}
                slug="monitoring"
            />
            <section className="max-w-[1280px]   py-24 text-white bg-black flex flex-col gap-16 w-full flex items-center mx-auto px-4  ">
                {/* Nagłówki */}
                <div className="flex flex-col gap-6 max-w-4xl text-center w-full flex items-center">
                    <h4 className=" text-sm font-semibold uppercase tracking-[4px]">
                        Monitoring i Kamery IP
                    </h4>
                    <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                        Profesjonalne systemy monitoringu dla Twojego bezpieczeństwa
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent  opacity-80 rounded"></div>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Instalujemy nowoczesne kamery IP o wysokiej rozdzielczości, które zapewniają stały podgląd oraz nagrania wysokiej jakości — dostępne zdalnie na telefonie czy komputerze.
                    </p>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
                        Nasze systemy są niezawodne, łatwe w obsłudze i wyposażone w funkcje takie jak detekcja ruchu, powiadomienia oraz integracja z automatyką domu i bram.
                    </p>
                </div>

                {/* Obraz + info */}
                <div className="max-w-6xl  flex flex-col md:flex-row gap-10 items-center flex items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                            Co oferujemy?
                        </h2>
                        <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
                            <li>Kamery IP o rozdzielczości Full HD i 4K</li>
                            <li>Zdalny dostęp i podgląd na żywo przez aplikację mobilną</li>
                            <li>Detekcja ruchu i inteligentne powiadomienia</li>
                            <li>Integracja z systemem smart home oraz automatyką bram i garażu</li>
                            <li>Profesjonalny montaż i konfiguracja</li>
                        </ul>
                    </div>
                </div>
                {/* Sekcja z trzema zdjęciami */}
                <div className="max-w-6xl  grid grid-cols-1 sm:grid-cols-1 gap-6">
                    {[1].map((num) => (
                        <div
                            key={num}
                            className="p-1 rounded-xl bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg shadow-green-600/50"
                        >
                            <Image
                                src={`/assets/images/automation/bcsip_${num}.jpg`}
                                alt={`Widok kamer z aplikacji ${num}`}
                                className="w-full rounded-lg object-cover"
                                loading="lazy"
                                width={300}
                                height={300}
                            />


                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}