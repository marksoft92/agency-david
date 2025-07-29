'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Strony internetowe",
    description:
      "Profesjonalne, responsywne i zoptymalizowane pod SEO strony www, które pomagają rozwinąć Twój biznes online.",
    image: "/assets/images/capture/stalumo-web.jpg",
    imgBG:  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=600&h=600",
    alt: "Projekt strony internetowej",
  },
  {
    title: "Sklepy internetowe",
    description:
      "Funkcjonalne i intuicyjne platformy e-commerce z szybkim ładowaniem i integracjami z systemami płatności.",
    image: "/assets/images/web2.webp",
    imgBG:  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=600&h=600",
    alt: "Projekt sklepu internetowego",
  },
  {
    title: "Aplikacje webowe",
    description:
      "Dedykowane aplikacje webowe z nowoczesnym designem i skalowalną architekturą dostosowaną do Twoich potrzeb.",
    image: "/assets/images/web3.webp",
    imgBG:  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=600&h=600",
    alt: "Projekt aplikacji webowej",
  },
  {
    title: "Aplikacje mobilne",
    description:
      "Natywne i hybrydowe aplikacje mobilne na Android i iOS o wysokiej wydajności i przyjaznym interfejsem.",
    image: "/assets/images/web4.webp",
    imgBG:  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=600&h=600",
    alt: "Projekt aplikacji mobilnej",
  },
  {
    title: "Zarządzanie serwerami",
    description:
      "Profesjonalna obsługa serwerów, hosting, monitoring i optymalizacja infrastruktury IT Twojej firmy.",
    image: "/assets/images/web5.webp",
    imgBG:  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?fit=crop&w=600&h=600",
    alt: "Zarządzanie serwerami",
  },
];

export default function WebGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Zablokuj scrollowanie strony
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = ''; // Przywróć scrollowanie
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black py-24 px-6 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-pink-400 text-center">
        Nasze ostatnie realizacje
      </h2>
      <div
        className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        style={{ columnFill: "balance" }}
      >
        {projects.map(({ title, description,imgBG, alt }, i) => (
          <motion.article
            key={i}
            className="relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid shadow-lg border border-pink-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            onClick={() => openModal(i)}
          >
            <img
              src={imgBG}
              alt={alt}
              loading="lazy"
              className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105 hover:brightness-75"
              style={{ aspectRatio: "4 / 3" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end rounded-xl">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            </div>
          </motion.article>
        ))}
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
              className="absolute top-4 right-4 text-white bg-pink-600 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Close modal"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-pink-600 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-pink-600 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
