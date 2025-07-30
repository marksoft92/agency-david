"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
    return (<>
        <section className="bg-black border-2 border-pink-500 py-20 px-6 rounded-3xl max-w-4xl mx-auto text-center text-white shadow-lg shadow-pink-600/50">
            <motion.h2
                className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Gotowy na współpracę, która wyniesie Twój biznes na wyższy poziom?
            </motion.h2>

            <motion.p
                className="mb-10 max-w-xl mx-auto text-lg leading-relaxed text-gray-300 drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Skontaktuj się z nami już dziś i zacznij realizować swoje cele z profesjonalnym wsparciem.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Link
                    href="/kontakt"
                    className="inline-block bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-semibold px-10 py-4 rounded-full shadow-lg shadow-pink-600 transition-all duration-300
          hover:from-cyan-400 hover:to-pink-500 hover:scale-105"
                >
                    Skontaktuj się z nami
                </Link>
            </motion.div>
            
        </section>

        <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="h-1 bg-gradient-to-r from-pink-500 to-cyan-400 my-16"
      />
      </>
    );
}
