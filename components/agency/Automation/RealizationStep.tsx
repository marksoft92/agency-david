'use client';

import { motion } from 'framer-motion';
import {
  LucideClipboardCheck,
  LucidePackage,
  LucideSettings,
  LucideUserCheck,
} from 'lucide-react';

const steps = [
  {
    icon: LucideClipboardCheck,
    title: "Konsultacja i pomiar",
    desc: "Zbadamy Twoje potrzeby i dobierzemy najlepsze rozwiązania automatyki i monitoringu.",
  },
  {
    icon: LucidePackage,
    title: "Projekt i wycena",
    desc: "Przygotujemy szczegółowy projekt i kosztorys, dopasowany do Twojego budżetu.",
  },
  {
    icon: LucideSettings,
    title: "Montaż i konfiguracja",
    desc: "Wykonujemy instalację i konfigurację systemu w Twoim domu lub firmie.",
  },
  {
    icon: LucideUserCheck,
    title: "Szkolenie i wsparcie",
    desc: "Przeszkolimy Cię z obsługi i zapewnimy pełne wsparcie techniczne.",
  },
];

export default function RealizationsSteps() {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-2"
        >
          Jak wygląda proces współpracy?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-white/70 mb-16"
        >
          Przeprowadzamy Cię przez kolejne etapy wdrożenia automatyki i monitoringu – od pomiaru po wsparcie po instalacji.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20 flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Icon className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
            <p className="text-white/70 text-center text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
