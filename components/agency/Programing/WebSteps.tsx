'use client';

import { motion } from 'framer-motion';
import {
  LucideClipboardCheck,
  LucideCode,
  LucideSmartphone,
  LucideServer,
} from 'lucide-react';

const steps = [
  {
    icon: LucideClipboardCheck,
    title: "Analiza i konsultacja",
    desc: "Zbieramy wymagania, analizujemy cele i dobieramy najlepsze rozwiązania technologiczne, by zapewnić Ci skuteczny efekt.",
  },
  {
    icon: LucideCode,
    title: "Projektowanie i development",
    desc: "Tworzymy unikalny design oraz implementujemy funkcjonalności, wykorzystując nowoczesne frameworki i sprawdzone technologie.",
  },
  {
    icon: LucideSmartphone,
    title: "Testy i wdrożenie",
    desc: "Przeprowadzamy kompleksowe testy na różnych urządzeniach i przeglądarkach, a następnie wdrażamy aplikacje na produkcję.",
  },
  {
    icon: LucideServer,
    title: "Wsparcie i utrzymanie",
    desc: "Zapewniamy monitoring, aktualizacje oraz wsparcie techniczne, by Twoja strona i aplikacje działały niezawodnie i bez przerw.",
  },
];

export default function WebSteps() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-pink-400"
        >
          Jak przebiega proces współpracy?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-white/70 mb-16 leading-relaxed"
        >
          Od pierwszego kontaktu po finalne wdrożenie – przeprowadzimy Cię krok po kroku, dbając o każdy detal i spełniając Twoje oczekiwania.
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
            <Icon className="w-12 h-12 mb-4 text-pink-400" />
            <h3 className="text-xl font-semibold mb-2 text-pink-400">{title}</h3>
            <p className="text-white/70 text-center text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
