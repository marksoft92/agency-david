'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <>
            <section className="bg-black border-2 border-green-400 py-20 px-6 rounded-3xl max-w-4xl mx-auto text-center text-white shadow-lg shadow-green-600/50 my-[2rem]">
                <motion.h2
                    className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Gotowi na nowoczesne rozwiązania smart home i pełną automatyzację?
                </motion.h2>

                <motion.p
                    className="mb-10 max-w-xl mx-auto text-lg leading-relaxed text-gray-300 drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Skontaktuj się z nami i zacznij kontrolować swój dom, bramę czy monitoring wygodnie z poziomu telefonu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link
                        href="/kontakt"
                        className="inline-block bg-gradient-to-r from-green-400 to-yellow-400 text-black font-semibold px-10 py-4 rounded-full shadow-lg shadow-green-600 transition-all duration-300
          hover:from-yellow-400 hover:to-green-400 hover:scale-105"
                    >
                        Skontaktuj się z nami
                    </Link>
                </motion.div>
            </section>
            <div className="h-[50px] bg-black"></div>
        </>
    );
}
