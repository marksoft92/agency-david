"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "HannaW",
    nick_symbol: "HW",
    text: "Profesjonalne podejście, szybka realizacja i świetne wsparcie przy tworzeniu strony internetowej. Dzięki nim nasza widoczność w sieci znacząco wzrosła.",
  },
  {
    name: "KrzysiuZaw.",
    nick_symbol: "KZ",
    text: "Sklep internetowy stworzony przez zespół to strzał w dziesiątkę – prosty w obsłudze i zoptymalizowany pod SEO. Efekty sprzedażowe widoczne od pierwszych tygodni.",
  },
  {
    name: "Seb9",
    nick_symbol: "S9",
    text: "Aplikacja mobilna spełniła nasze oczekiwania w 100%. Intuicyjny interfejs, stabilność i szybkie wsparcie techniczne. Polecam każdemu, kto chce rozwijać biznes mobilnie.",
  },
];

export default function WebTestimonialsSimple() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg"
        >
          Opinie naszych klientów
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed"
        >
          Zaufali nam liderzy branży. Przeczytaj, co mówią o współpracy.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map(({ name, nick_symbol, text }, i) => (
          <motion.div
            key={i}
            className="bg-black/60 rounded-3xl p-8 shadow-2xl border-2 border-transparent hover:border-pink-500 hover:shadow-pink-600/50 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold 
           rounded-full mb-6 object-cover shadow-lg border-4 border-pink-500
           ">
            {nick_symbol}
          </div>
            <p className="mb-6 text-white/80 italic text-base leading-relaxed">&quot;{text}&quot;</p>
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg">
              {name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
