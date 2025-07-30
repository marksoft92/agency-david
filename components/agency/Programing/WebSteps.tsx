"use client";

import { motion } from "framer-motion";
import {
  LucideClipboardCheck,
  LucideCode,
  LucideSmartphone,
  LucideServer,
} from "lucide-react";

const steps = [
  {
    icon: LucideClipboardCheck,
    title: "Analiza i konsultacja",
    desc: "Zbieramy wymagania, analizujemy cele i dobieramy najlepsze rozwiązania technologiczne, by zapewnić Ci skuteczny efekt.",
    styleCls: "from-pink-500 to-pink-700"
  },
  {
    icon: LucideCode,
    title: "Projektowanie i development",
    desc: "Tworzymy unikalny design oraz implementujemy funkcjonalności, wykorzystując nowoczesne frameworki i sprawdzone technologie.",
    styleCls: "from-cyan-400 to-blue-600"
  },
  {
    icon: LucideSmartphone,
    title: "Testy i wdrożenie",
    desc: "Przeprowadzamy kompleksowe testy na różnych urządzeniach i przeglądarkach, a następnie wdrażamy aplikacje na produkcję.",
    styleCls: "from-pink-500 to-pink-700"
  },
  {
    icon: LucideServer,
    title: "Wsparcie i utrzymanie",
    desc: "Zapewniamy monitoring, aktualizacje oraz wsparcie techniczne, by Twoja strona i aplikacje działały niezawodnie i bez przerw.",
    styleCls: "from-cyan-400 to-blue-600"
  },
];

export default function WebSteps() {
  return (
    <section className="bg-black py-20 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg"
        >
          Jak przebiega proces współpracy?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-white/70 mb-20 leading-relaxed text-lg"
        >
          Od pierwszego kontaktu po finalne wdrożenie – przeprowadzimy Cię krok po kroku, dbając o każdy detal i spełniając Twoje oczekiwania.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
        {steps.map(({ icon: Icon, title, desc, styleCls }, i) => (
          <motion.div
            key={i}
            className="bg-black/60 rounded-3xl p-8 shadow-2xl border-2 border-transparent
              hover:border-pink-500 hover:shadow-pink-600/50
              transition-all duration-500
              flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <div className={"w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg " + styleCls}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg">
              {title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
