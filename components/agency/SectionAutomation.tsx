'use client';

import { useState } from "react";
import WebSteps from "./Automation/WebSteps";
import WebFeatures from "./Automation/WebFeatures";
import WebTestimonials from "./Automation/WebTestimonials";
import TableSucces from "./Automation/TableSucces";
import CTA from "./Automation/CTA";
import InteractiveCard from "./Automation/InteractiveCard";
import Link from "next/link";
import ArrowBetweenSections from "../ArrowBetweenSections";
const projects = [
    {
        title: "Instalacja kamer IP BCS",
        description:
            "Profesjonalne instalacje kamer IP BCS zapewniające pełną kontrolę i monitoring Twojej posesji 24/7, z dostępem zdalnym przez aplikacje mobilne.",
        image: "/assets/images/automation/bcsip_1.jpg",
        alt: "Instalacja kamer IP BCS",
    },
    {
        title: "Sterowanie bramami wjazdowymi i garażowymi",
        description:
            "Zdalne sterowanie bramami za pomocą telefonu z Androidem — wygoda i bezpieczeństwo w jednym. Integracja z systemami smart home i asystentami głosowymi.",
        image: "/assets/images/automation/supla_1.jpg",
        alt: "Sterowanie bramami przez telefon",
    },
    {
        title: "Customowe panele ścienne Sonoff",
        description:
            "Indywidualnie zaprojektowane i zaprogramowane panele ścienne Sonoff, które umożliwiają pełną kontrolę urządzeń smart home z jednej wygodnej lokalizacji.",
        image: "/assets/images/automation/sonoff_1.jpg",
        alt: "Customowe panele ścienne Sonoff",
    },
];

export default function SmartHomeOffer() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <section
                id="automation"
                className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16"
            >
                {/* Nagłówki */}
                <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
                    <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
                        Oferta smart home i bezpieczeństwa
                    </h4>
                    <h1
                        className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl
              text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"
                    >
                        Inteligentne rozwiązania dla Twojego domu
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mx-auto opacity-80 rounded"></div>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
                        Zapewniamy nowoczesne i bezpieczne systemy smart home, które ułatwiają
                        codzienne życie i chronią Twoją posesję. Instalacje kamer, zdalne sterowanie
                        bramami oraz customowe panele Sonoff — wszystko dostosowane do Twoich potrzeb.
                    </p>
                    <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
                        Jako eksperci w branży bezpieczeństwa gwarantujemy profesjonalizm, niezawodność
                        i wsparcie na każdym etapie realizacji.
                    </p>
                </div>

                {/* Korzyści */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div>
                        <h2
                            className="text-3xl font-semibold uppercase mb-3
              text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"
                        >
                            Dlaczego warto wybrać naszą ofertę?
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-transparent opacity-80 rounded mb-6"></div>
                        <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
                            <li>Kompleksowa instalacja i konfiguracja sprzętu BCS</li>
                            <li>Zdalny dostęp do systemu przez aplikację mobilną</li>
                            <li>Integracja z systemami smart home i Google Assistant</li>
                            <li>Bezpieczeństwo oparte na nowoczesnych protokołach i szyfrowaniu</li>
                            <li>Dedykowane oprogramowanie do paneli Sonoff, dostosowane do potrzeb klienta</li>
                            <li>Wsparcie techniczne i monitoring działania systemu 24/7</li>
                        </ul>
                    </div>

                    <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-[#2e2e2e]">
                        <h3 className="text-white text-2xl font-semibold mb-4 uppercase">
                            Technologie, których używamy
                        </h3>
                        <p className="text-[#A5A5A5] text-lg leading-relaxed">
                            Kamery IP BCS, Android, MQTT, ESPHome, Sonoff Tasmota, Home Assistant,
                            Node-RED, React, Next.js, TypeScript, Tailwind CSS, Docker, AWS.
                        </p>
                        <Link
                            href="/smart-home"
                            className="self-start mt-2 inline-block px-4 py-2 rounded-xl border-2 border-transparent
             bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400
             hover:border-green-400 hover:shadow-lg hover:shadow-yellow-400/50
             transition-all duration-500"
                        >
                            Sprawdź rozwiązania smart home →
                        </Link>
                    </div>
                </div>

                {/* Galeria projektów */}
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-3xl font-semibold uppercase mb-6 text-center
            text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"
                    >
                        Nasze ostatnie realizacje
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {projects.map(({ title, description, image, alt }, i) => (
                            <article
                                key={i}
                                className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg border border-green-400 hover:scale-[1.03] transition-transform duration-300"
                                onClick={() => openModal(i)}
                                tabIndex={0}
                                aria-label={`Otwórz projekt: ${title}`}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") openModal(i);
                                }}
                            >
                                <img
                                    src={image}
                                    alt={alt}
                                    loading="lazy"
                                    className="w-full h-[20rem] object-cover rounded-xl "
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col rounded-xl justify-center hover:bg-black/50">
                                    <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {modalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full max-w-5xl max-h-[95vh] mx-4 overflow-y-auto rounded-xl border border-white bg-black p-4 flex items-center justify-center h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].alt}
                                className=" max-w-full rounded-lg object-contain object-top absolute top-0"
                            />
                            {/* Controls */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white bg-green-600 rounded-full p-2 hover:bg-green-700 transition"
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1)
                                }
                                className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-green-600 rounded-full p-2 hover:bg-green-700 transition"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1)
                                }
                                className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-green-600 rounded-full p-2 hover:bg-green-700 transition"
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <WebSteps />
            <WebFeatures />
            <TableSucces />
            <WebTestimonials />
            <CTA />

        </>
    );
}
