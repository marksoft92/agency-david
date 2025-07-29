"use client";

import { motion } from "framer-motion";
import { LucideSmartphone, LucideLock, LucideMonitorSmartphone, LucideCamera, LucideServer, LucideSettings } from "lucide-react";

const services = [
    {
        icon: LucideSmartphone,
        title: "Sterowanie bramą z telefonu (Android)",
        desc: "Otwieraj i zamykaj bramę wjazdową z aplikacji mobilnej dzięki systemowi Supla. Bezpieczne i szybkie połączenie z Twoim smartfonem.",
    },
    {
        icon: LucideLock,
        title: "Sterowanie bramą garażową (Supla)",
        desc: "Obsługa napędów bram garażowych przy użyciu urządzeń Supla z funkcją harmonogramów i dostępu zdalnego.",
    },
    {
        icon: LucideCamera,
        title: "Monitoring IP (BCS)",
        desc: "System kamer IP z podglądem na żywo na telefonie, komputerze i telewizorze. Instalacja i konfiguracja BCS NVR, aplikacje mobilne, zdalny dostęp.",
    },
    {
        icon: LucideMonitorSmartphone,
        title: "Customowy panel ścienny",
        desc: "Interaktywny dotykowy panel ścienny z własnym interfejsem – dashboard z integracją Supla, Tuya, kamery IP i więcej.",
    },
    {
        icon: LucideServer,
        title: "Integracja z Google Assistant",
        desc: "Sterowanie głosowe urządzeniami automatyki domowej. Połącz bramę, światło, rolety z Google Home i steruj bezdotykowo.",
    },
    {
        icon: LucideSettings,
        title: "Indywidualne rozwiązania smart home",
        desc: "Projektujemy unikalne zestawy automatyki – od sterowania LED po zarządzanie zasilaniem. Dopasowane do Twoich potrzeb.",
    },
];

export default function SectionAutomationExtended() {
    return (
        <section id="automation" className="bg-black py-24 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-blue-400 mb-6"
                >
                    Automatyka domowa i nowoczesne sterowanie
                </motion.h2>
                <motion.p
                    className="text-center text-white/70 max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Kompleksowa instalacja automatyki – bramy, kamery, oświetlenie, panele i sterowanie głosowe. Projektujemy i wdrażamy systemy Supla, Tuya, BCS oraz rozwiązania custom.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(({ title, desc, icon: Icon }, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 rounded-2xl p-6 shadow-xl border border-white/10 hover:scale-[1.02] transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Icon className="text-blue-300 w-8 h-8" />
                                <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
                            </div>
                            <p className="text-white/70 text-sm">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
