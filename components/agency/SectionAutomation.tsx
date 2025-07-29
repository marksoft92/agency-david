// components/SectionAutomation.tsx
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionAutomationExtended from "./Automation/SectionAutomationExtended";
import SectionAutomationRealization from "./Automation/SectionAutomationRealization";
import RealizationsSteps from "./Automation/RealizationStep";
import RealizationsFeatures from "./Automation/RealizationFutures";
import RealizationsTestimonials from "./Automation/RealizationTestimonials";

const slides = [
    {
        title: "Widok z 4 kamer IP BCS na telewizorze",
        image: "/assets/images/img_work9.webp",
        alt: "Monitoring IP na telewizorze",
    },
    {
        title: "Sterowanie bramą w aplikacji mobilnej",
        image: "/assets/images/img_work9.webp",
        alt: "Sterowanie bramą z aplikacji",
    },
    {
        title: "Panel ścienny z własnym interfejsem",
        image: "/assets/images/img_work9.webp",
        alt: "Panel ścienny do sterowania domem",
    },
];

export default function SectionAutomation() {
    return (
      <>
        <section id="automation" className="bg-black py-24 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-blue-400 mb-6"
                >
                    Automatyka, monitoring i inteligentne sterowanie
                </motion.h2>
                <motion.p
                    className="text-center text-white/70 max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Profesjonalna instalacja systemów monitoringu, inteligentne sterowanie bramami i customowe panele dotykowe z integracją Supla, Tuya, BCS. Wszystko w nowoczesnym stylu.
                </motion.p>

                {/* Usługi */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: "Instalacja kamer IP",
                            desc: "Zdalny podgląd na telefonie, tablecie i TV. Instalacja systemów BCS i integracja z rejestratorami NVR.",
                        },
                        {
                            title: "Sterowanie bramami",
                            desc: "Obsługa bram wjazdowych i garażowych przez aplikację mobilną. Wsparcie dla harmonogramów i automatyzacji.",
                        },
                        {
                            title: "Panele sterujące",
                            desc: "Customowy dashboard oparty o Sonoff z interfejsem webowym, integracje z Supla, Tuya i systemami kamer.",
                        },
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 rounded-2xl p-6 shadow-xl border border-white/10 hover:scale-[1.02] transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-blue-300">
                                {service.title}
                            </h3>
                            <p className="text-white/70">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Slider z realizacjami */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500 }}
                        loop
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="w-full max-w-5xl mx-auto"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="bg-black/60 p-4 text-center">
                                        <p className="text-white text-lg">{slide.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
        <SectionAutomationExtended />
        <SectionAutomationRealization />
        <RealizationsSteps />
        <RealizationsFeatures/>
        <RealizationsTestimonials/>
      </>
    );
}
