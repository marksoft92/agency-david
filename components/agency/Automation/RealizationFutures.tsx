'use client';

import { motion } from 'framer-motion';
import { LucideCheckCircle, LucideShield, LucideBolt, LucideWifi, LucideUserPlus } from 'lucide-react';

const features = [
  {
    icon: LucideCheckCircle,
    title: "Niezawodność działania",
    desc: "Systemy działają stabilnie 24/7, zapewniając komfort i bezpieczeństwo.",
  },
  {
    icon: LucideShield,
    title: "Wysoki poziom bezpieczeństwa",
    desc: "Szyfrowane połączenia i kontrola dostępu chronią Twoje dane i sprzęt.",
  },
  {
    icon: LucideBolt,
    title: "Oszczędność energii",
    desc: "Inteligentne zarządzanie oświetleniem i urządzeniami pozwala na niższe rachunki.",
  },
  {
    icon: LucideWifi,
    title: "Sterowanie zdalne",
    desc: "Zarządzaj domem z każdego miejsca dzięki aplikacjom na telefon i integracji z Google Assistant.",
  },
  {
    icon: LucideUserPlus,
    title: "Indywidualne podejście",
    desc: "Dopasowujemy systemy do Twoich potrzeb i możliwości technicznych.",
  },
];

export default function RealizationsFeatures() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-blue-400"
        >
          Dlaczego warto z nami współpracować?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-white/70 mb-12"
        >
          Nasze rozwiązania to połączenie nowoczesnej technologii i indywidualnego podejścia – gwarancja jakości i wygody.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/20 flex flex-col items-center text-center hover:scale-[1.04] transition-transform cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Icon className="w-10 h-10 mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold mb-2 text-blue-300">{title}</h3>
            <p className="text-white/70 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
