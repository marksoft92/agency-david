"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "kasia.w",
    nick_symbol: "MW",
    text: "Chłopaki ogarnęli mi monitoring z podglądem na telefon i TV. Wszystko śmiga, zero problemów. Czuć, że znają się na rzeczy.",
  },
  {
    name: "tomnowak",
    nick_symbol: "TN",
    text: "Panel na Sonoffie zrobiony idealnie pod mój dom. Mam wszystko w jednym miejscu – bramy, światła, kamery. Bez kombinowania.",
  },
  {
    name: "marta_k",
    nick_symbol: "MK",
    text: "Supla do sterowania bramą działa super. Otwieram z telefonu, gdziekolwiek jestem. Szybko, wygodnie i bez stresu.",
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
          className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg"
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
            className="bg-black/60 rounded-3xl p-8 shadow-2xl border-2 border-transparent hover:border-green-400 hover:shadow-yellow-600/50 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
           <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold 
           rounded-full mb-6 object-cover shadow-lg border-4 border-green-400
           ">
            {nick_symbol}
          </div>
            <p className="mb-6 text-white/80 italic text-base leading-relaxed">&quot;{text}&quot;</p>
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg">
              {name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

   
          