import { motion } from "framer-motion";
import ParallaxHero from "./Paralax";

export default function Hero() {
    return (

        <ParallaxHero />
        // <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        //     <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-blue-500/10 to-black" />
        //     <motion.div
        //         initial={{ opacity: 0, y: 30 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 1 }}
        //         className="relative z-10 max-w-2xl px-6"
        //     >
        //         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
        //             Strony internetowe &<br /> inteligentne domy
        //         </h1>
        //         <p className="mt-4 text-lg text-white/80">
        //             <h1 className="text-4xl font-bold text-image-fill">
        //                 Projektujemy nowoczesne <br />aplikacje oraz instalujemy<br /> systemy smart home.
        //             </h1>

        //         </p>
        //         <div className="mt-6 flex justify-center gap-4">
        //             <a href="#services" className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl shadow-xl">
        //                 Zamów stronę
        //             </a>
        //             <a href="#automation" className="border border-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/10">
        //                 Automatyka
        //             </a>
        //         </div>
        //     </motion.div>
        // </section>
    );
}