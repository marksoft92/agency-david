"use client";

import { motion } from "framer-motion";
import {
  LucideZap,
  LucideShield,
  LucideTrendingUp,
  LucideSmartphone,
  LucideUsers,
} from "lucide-react";

const features = [
  {
    icon: LucideZap,
    title: "Szybkość działania",
    desc: "Optymalizujemy kod i grafikę, aby strony i aplikacje ładowały się w ułamku sekundy, co przekłada się na lepsze wyniki SEO i UX.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: LucideShield,
    title: "Bezpieczeństwo",
    desc: "Implementujemy najnowsze standardy bezpieczeństwa, certyfikaty SSL oraz zabezpieczenia przed atakami, aby chronić Twoje dane i użytkowników.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: LucideTrendingUp,
    title: "Skalowalność",
    desc: "Projektujemy systemy tak, by mogły rosnąć wraz z rozwojem Twojej firmy, obsługując więcej użytkowników i nowych funkcjonalności.",
    color: "from-purple-500 to-indigo-700",
  },
  {
    icon: LucideSmartphone,
    title: "Responsywność",
    desc: "Zapewniamy perfekcyjne dopasowanie wyglądu i działania na wszystkich urządzeniach – smartfonach, tabletach i desktopach.",
    color: "from-cyan-400 to-blue-600",
  },
  {
    icon: LucideUsers,
    title: "Wsparcie techniczne",
    desc: "Oferujemy pełne wsparcie i doradztwo, abyś mógł skupić się na swoim biznesie, a my zajmiemy się techniczną stroną projektu.",
    color: "from-pink-500 to-pink-700",
  },
];

export default function WowFeatures() {
  return (
    <section className="relative bg-black py-24 px-6 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg">
          Dlaczego warto wybrać naszą ofertę?
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Zapewniamy kompleksowe rozwiązania, które łączą innowacje, doświadczenie i indywidualne podejście do każdego projektu.  
          Twoje cele i satysfakcja są dla nas najważniejsze.
        </p>

        <div className="flex flex-col gap-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {features.slice(0, 3).map(({ icon: Icon, title, desc, color }, i) => (
      <motion.div
        key={`first-${i}`}
        className={`relative rounded-3xl p-8 shadow-2xl cursor-pointer bg-black/60 border-2 border-transparent
          hover:border-pink-500 hover:shadow-pink-600/50
          transition-all duration-500
          flex flex-col items-center text-center
          `}
        whileHover={{ scale: 1.07, y: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full blur-3xl opacity-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #ec4899, #3b82f6)" }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    ))}
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:px-24">
    {features.slice(3, 5).map(({ icon: Icon, title, desc, color }, i) => (
      <motion.div
        key={`second-${i}`}
        className={`relative rounded-3xl p-8 shadow-2xl cursor-pointer bg-black/60 border-2 border-transparent
          hover:border-pink-500 hover:shadow-pink-600/50
          transition-all duration-500
          flex flex-col items-center text-center
          `}
        whileHover={{ scale: 1.07, y: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full blur-3xl opacity-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #ec4899, #3b82f6)" }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
