"use client";

import { motion } from "framer-motion";
import { LucideCheckCircle } from "lucide-react";

const benefits = [
    {
        title: "Szybki zwrot inwestycji",
        desc: "Optymalizacja kodu i grafik skraca czas ładowania stron, poprawiając konwersję i zmniejszając współczynnik odrzuceń.",
    },
    {
        title: "Pełne bezpieczeństwo danych",
        desc: "Stosujemy HTTPS, certyfikaty SSL, mechanizmy ochrony przed atakami XSS, CSRF i DDoS oraz audyty bezpieczeństwa.",
    },
    {
        title: "Skalowalna architektura",
        desc: "Projektujemy backend i frontend z myślą o łatwym skalowaniu poziomym i pionowym, obsługując rosnącą liczbę użytkowników.",
    },
    {
        title: "Responsywność i dostępność",
        desc: "Zgodność z WCAG, adaptacyjne układy i testy na urządzeniach mobilnych, tabletach oraz desktopach, by każdy użytkownik miał najlepsze doświadczenie.",
    },
    {
        title: "Kompleksowa optymalizacja SEO",
        desc: "Wdrażamy techniki SEO on-site: semantyczne znaczniki, szybkość strony, mapy witryn, dane strukturalne oraz optymalizację pod kątem Core Web Vitals.",
    },
    {
        title: "Wsparcie techniczne 24/7",
        desc: "Całodobowe monitorowanie działania systemów, szybkie reakcje na zgłoszenia i regularne aktualizacje oprogramowania.",
    },
    {
        title: "Integracje z systemami zewnętrznymi",
        desc: "Możliwość łatwego łączenia z CRM, ERP, systemami płatności, marketing automation i innymi narzędziami biznesowymi.",
    },
    {
        title: "Przyjazny i intuicyjny CMS",
        desc: "Dostarczamy narzędzia do samodzielnej edycji treści, abyś nie musiał czekać na programistę przy każdej zmianie.",
    },
    {
        title: "Wysoka jakość kodu",
        desc: "Stosujemy standardy clean code, testy jednostkowe i integracyjne, co zapewnia stabilność i łatwość dalszego rozwoju projektu.",
    },
    {
        title: "Transparentność i raportowanie",
        desc: "Regularne raporty z postępów prac, statystyk ruchu i wyników SEO, byś zawsze miał pełen obraz sytuacji.",
    },
];

export default function ClientBenefitsTable() {
    return (
        <section className="relative bg-black py-24 px-6 text-white overflow-hidden max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg text-center">
                Co zyskujesz podejmując z nami współpracę?
            </h2>

            <div className="overflow-x-auto rounded-3xl border border-transparent hover:border-pink-500 transition-all duration-500 shadow-2xl shadow-pink-600/30 bg-black/70">
                <table className="w-full min-w-[700px] text-left text-gray-300">
                    <thead className="border-b border-pink-500">
                        <tr>
                            <th className="px-8 py-4 text-lg font-semibold text-white">Korzyść</th>
                            <th className="px-8 py-4 text-lg font-semibold text-white">Opis techniczno-marketingowy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {benefits.map(({ title, desc }, i) => (
                            <motion.tr
                                key={i}
                                className="border-b border-pink-700 hover:bg-pink-900/20 cursor-pointer transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                            >
                                <td className="px-8 py-6 flex items-center gap-4 text-white font-semibold text-lg">
                                    <LucideCheckCircle className="w-7 h-7 text-pink-500 drop-shadow" />
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
                            className="text-pink-500 hover:text-pink-400 transition text-4xl"
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
