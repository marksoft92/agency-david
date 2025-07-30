'use client';

import { motion } from "framer-motion";
import {
  LucideZap,
  LucideShield,
  LucideSmartphone,
  LucideCpu,
  LucideCamera,
} from "lucide-react";

const features = [
  {
    icon: LucideCamera,
    title: "Instalacja kamer IP BCS",
    desc: "Profesjonalny montaż i konfiguracja kamer IP marki BCS zapewnia monitoring najwyższej jakości z dostępem online z każdego miejsca.",
    color: "bg-green-400",
  },
  {
    icon: LucideSmartphone,
    title: "Sterowanie bramami wjazdowymi i garażowymi",
    desc: "Zdalne otwieranie i zamykanie bram za pomocą aplikacji na telefon Android – wygoda i bezpieczeństwo w zasięgu ręki.",
    color: "bg-yellow-400",
  },
  {
    icon: LucideCpu,
    title: "Customowe programowanie paneli Smart Home Sonoff",
    desc: "Indywidualne dopasowanie funkcji i integracja paneli ściennych Sonoff, aby w pełni kontrolować swój inteligentny dom.",
    color: "bg-green-400",
  },
  {
    icon: LucideShield,
    title: "Bezpieczeństwo i prywatność",
    desc: "Zabezpieczamy systemy przed nieautoryzowanym dostępem, stosując najnowsze protokoły i szyfrowanie danych.",
    color: "bg-yellow-400",
  },
  {
    icon: LucideZap,
    title: "Szybka i niezawodna instalacja",
    desc: "Nasze rozwiązania działają błyskawicznie, a instalacje są wykonane profesjonalnie, zapewniając stabilność i bezawaryjność.",
    color: "bg-green-400",
  },
];

export default function SmartHomeFeatures() {
  return (
    <section className="relative bg-black py-24 px-6 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg">
          Dlaczego warto wybrać naszą ofertę Smart Home?
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Oferujemy nowoczesne i bezpieczne rozwiązania dla inteligentnego domu – od monitoringu, przez zdalne sterowanie bramami, po customowe panele sterujące.
          Zapewniamy profesjonalizm, wsparcie i indywidualne podejście do każdego projektu.
        </p>

        <div className="flex flex-col gap-10">
  {/* Pierwszy rząd – 3 elementy */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {features.slice(0, 3).map(({ icon: Icon, title, desc, color }, i) => (
      <motion.div
        key={i}
        className="relative rounded-3xl p-8 shadow-2xl cursor-pointer bg-black/60 border-2 border-transparent
        hover:border-green-400 hover:shadow-green-600/50
        transition-all duration-500 flex flex-col items-center text-center"
        whileHover={{ scale: 1.07, y: -8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full blur-3xl opacity-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #22c55e, #facc15)' }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }}
        />
      </motion.div>
    ))}
  </div>

  {/* Drugi rząd – 2 elementy wyśrodkowane */}
  <div className="flex justify-center gap-10 flex-wrap">
    {features.slice(3).map(({ icon: Icon, title, desc, color }, i) => (
      <motion.div
        key={i + 3}
        className="w-full sm:w-[300px] md:w-[360px] relative rounded-3xl p-8 shadow-2xl cursor-pointer bg-black/60 border-2 border-transparent
        hover:border-green-400 hover:shadow-green-600/50
        transition-all duration-500 flex flex-col items-center text-center"
        whileHover={{ scale: 1.07, y: -8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full blur-3xl opacity-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #22c55e, #facc15)' }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }}
        />
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
