'use client';

import { motion } from "framer-motion";
import { LucideCheckCircle } from "lucide-react";

const benefits = [
    {
        title: "Bezpieczeństwo Twojego domu",
        desc: "Instalacja kamer IP BCS z podglądem na żywo i zapisem w chmurze, zabezpieczająca teren 24/7 przed intruzami.",
    },
    {
        title: "Sterowanie bramami z telefonu",
        desc: "Zdalne otwieranie i zamykanie bram garażowych i wjazdowych za pomocą aplikacji na Android, bezpiecznie i wygodnie.",
    },
    {
        title: "Customowe panele smart-home",
        desc: "Programowanie paneli Sonoff ściennych, które integrują sterowanie oświetleniem, ogrzewaniem i alarmem w jednym miejscu.",
    },
    {
        title: "Stabilna i skalowalna infrastruktura",
        desc: "Sieci i serwery zoptymalizowane pod kątem szybkiego i niezawodnego działania całego systemu smart home.",
    },
    {
        title: "Kompleksowa ochrona danych",
        desc: "Szyfrowanie komunikacji i zabezpieczenia na poziomie aplikacji oraz urządzeń, spełniające normy GDPR i RODO.",
    },
    {
        title: "Szybka reakcja i wsparcie",
        desc: "Monitoring systemów i błyskawiczne reakcje serwisu technicznego, by Twój smart home działał bez przerw.",
    },
    {
        title: "Łatwość rozbudowy systemu",
        desc: "Możliwość dodawania kolejnych modułów i urządzeń bez konieczności wymiany całej instalacji.",
    },
    {
        title: "Intuicyjne aplikacje i panele",
        desc: "Przyjazny interfejs użytkownika umożliwiający zarządzanie domem nawet dla osób nietechnicznych.",
    },
    {
        title: "Profesjonalne szkolenia i instrukcje",
        desc: "Pomoc w obsłudze systemu oraz dokumentacja dostosowana do Twoich potrzeb.",
    },
    {
        title: "Przejrzystość i raportowanie",
        desc: "Regularne raporty z działania systemu i rekomendacje optymalizacji.",
    },
];

export default function ClientBenefitsTable() {
    return (
        <section className="relative bg-black py-24 px-6 text-white overflow-hidden max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg text-center">
                Co zyskujesz wybierając nasze rozwiązania smart home?
            </h2>

            <div className="overflow-x-auto rounded-3xl border border-transparent hover:border-green-400 transition-all duration-500 shadow-2xl shadow-green-600/30 bg-black/70">
                <table className="w-full min-w-[700px] text-left text-gray-300">
                    <thead className="border-b border-green-400">
                        <tr>
                            <th className="px-8 py-4 text-lg font-semibold text-white">Korzyść</th>
                            <th className="px-8 py-4 text-lg font-semibold text-white">Opis techniczno-marketingowy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {benefits.map(({ title, desc }, i) => (
                            <motion.tr
                                key={i}
                                className="border-b border-green-700 hover:bg-green-900/20 cursor-pointer transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                            >
                                <td className="px-8 py-6 flex items-center gap-4 text-white font-semibold text-lg">
                                    <LucideCheckCircle className="w-7 h-7 text-green-400 drop-shadow" />
                                    {title}
                                </td>
                                <td className="px-8 py-6 text-gray-300 leading-relaxed">{desc}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sekcja podsumowania z oceną */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: benefits.length * 0.15 + 0.3, type: "spring", stiffness: 120 }}
                className="mt-16 max-w-xl mx-auto text-center"
            >
                <p className="text-lg mb-6">
                    Na ile ważne dla Ciebie są powyższe korzyści?
                </p>
                <div className="flex justify-center gap-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            aria-label={`${star} gwiazdek`}
                            className="text-green-400 hover:text-yellow-400 transition text-4xl"
                            onClick={() => alert(`Oceniłeś ${star} na 5`)}
                            type="button"
                        >
                            ★
                        </button>
                    ))}
                </div>
                <p className="mt-4 text-gray-400 italic text-sm">
                    Kliknij gwiazdkę, aby zaznaczyć ocenę. To pomoże nam dostosować ofertę do Twoich potrzeb.
                </p>
            </motion.div>
        </section>
    );
}
