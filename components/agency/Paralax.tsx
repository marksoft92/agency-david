// components/Hero.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const layers = [
    { src: '/assets/images/hero_0.png', depth: 2.2, direction: 'up', zIndex: 99, top: -58 },
    { src: '/assets/images/hero_1.webp', depth: 0.2, direction: 'up', zIndex: 98, top: 0 },
    { src: '/assets/images/hero_6-p-1600.png', depth: 0.5, direction: 'up', zIndex: 97, top: 0 },
    { src: '/assets/images/hero_7-p-1600.png', depth: 0.6, direction: 'up', zIndex: 96, top: 0 },
    { src: '/assets/images/hero_9-p-1600.png', depth: 0.05, direction: 'down', zIndex: 95, top: 0 },
    { src: '/assets/images/hero_10hero_5.webp', depth: 0.05, direction: 'down', zIndex: 94, top: 0 },
];

export default function Hero() {
    const { scrollY } = useScroll();

    return (
        <div className="relative w-full h-[100vh] ">
            {layers.map((layer, index) => {
                const directionMultiplier = layer.direction === 'up' ? -1 : 1;
                const y = useTransform(scrollY, [0, 500], [0, directionMultiplier * layer.depth * 200]);

                return (
                    <motion.div
                        key={index}
                        style={{ y, zIndex: layer.zIndex, bottom: `${layer.top}vh` }}
                        className="absolute inset-0 will-change-transform pointer-events-none"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={layer.src}
                                alt={`Layer ${index}`}
                                fill
                                className="object-cover object-center "
                                priority
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                );
            })}

<section className="relative h-screen flex items-center justify-center text-center overflow-hidden z-[100]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-blue-500/10 to-black" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 max-w-2xl px-6"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                    Strony internetowe &<br /> inteligentne domy
                </h1>
                <p className="mt-4 text-lg text-white/80">
                    <h1 className="text-4xl font-bold text-image-fill">
                        Projektujemy nowoczesne <br />aplikacje oraz instalujemy<br /> systemy smart home.
                    </h1>

                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <a href="#services" className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl shadow-xl">
                        Zamów stronę
                    </a>
                    <a href="#automation" className="border border-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/10">
                        Automatyka
                    </a>
                </div>
            </motion.div>
        </section>
        </div>
    );
}