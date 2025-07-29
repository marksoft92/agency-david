
'use client';

import { useState } from "react";
import WebSteps from "./Programing/WebSteps";
import WebGallery from "./Programing/WebGallery";
import WebFeatures from "./Programing/WebFeatures";
import WebTestimonials from "./Programing/WebTestimonials";
import InteractiveCards from "./Programing/InteractiveCard"

const projects = [
  {
    title: "Strony internetowe",
    description: "Profesjonalne, responsywne i zoptymalizowane pod SEO strony www, które pomagają rozwinąć Twój biznes online.",
    image: "/assets/images/capture/stalumo-web.jpg",
    alt: "Projekt strony internetowej",
  },
  {
    title: "Sklepy internetowe",
    description: "Funkcjonalne i intuicyjne platformy e-commerce z szybkim ładowaniem i integracjami z systemami płatności.",
    image: "/assets/images/web2.webp",
    alt: "Projekt sklepu internetowego",
  },
  {
    title: "Aplikacje webowe",
    description: "Dedykowane aplikacje webowe z nowoczesnym designem i skalowalną architekturą dostosowaną do Twoich potrzeb.",
    image: "/assets/images/web3.webp",
    alt: "Projekt aplikacji webowej",
  },
  {
    title: "Aplikacje mobilne",
    description: "Natywne i hybrydowe aplikacje mobilne na Android i iOS o wysokiej wydajności i przyjaznym interfejsie.",
    image: "/assets/images/web4.webp",
    alt: "Projekt aplikacji mobilnej",
  },
  {
    title: "Zarządzanie serwerami",
    description: "Profesjonalna obsługa serwerów, hosting, monitoring i optymalizacja infrastruktury IT Twojej firmy.",
    image: "/assets/images/web5.webp",
    alt: "Zarządzanie serwerami",
  },
];

export default function ProgrammingOffer() {
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

  return (<>
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
          Oferta programistyczna
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Profesjonalne strony, sklepy i aplikacje
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Oferujemy nowoczesne, szybkie i skalowalne rozwiązania dla Twojego biznesu online. Tworzymy responsywne strony internetowe, sklepy e-commerce, aplikacje webowe i mobilne oraz zajmujemy się profesjonalnym zarządzaniem serwerami.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Wszystko dopasowane do indywidualnych potrzeb i branży. Jako partner technologiczny gwarantujemy jakość, bezpieczeństwo i wsparcie na każdym etapie współpracy.
        </p>
      </div>

      {/* Korzyści */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Dlaczego warto wybrać naszą ofertę?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-transparent opacity-80 rounded mb-6"></div>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Indywidualne podejście do każdego projektu</li>
            <li>Wysoka jakość i optymalizacja pod SEO</li>
            <li>Bezpieczeństwo i zgodność z najnowszymi standardami</li>
            <li>Długoterminowe wsparcie techniczne</li>
            <li>Terminowość i transparentność realizacji</li>
          </ul>
        </div>

        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-[#2e2e2e]">
          <h3 className="text-white text-2xl font-semibold mb-4 uppercase">Technologie, których używamy</h3>
          <p className="text-[#A5A5A5] text-lg leading-relaxed">
            React, Next.js, TypeScript, Node.js, Tailwind CSS, Docker, AWS, GraphQL i wiele innych nowoczesnych narzędzi i frameworków.
          </p>
        </div>
      </div>

      {/* Galeria projektów */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold uppercase mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Nasze ostatnie realizacje
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ title, description, image, alt }, i) => (
            <article
              key={i}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg border border-pink-500 hover:scale-[1.03] transition-transform duration-300"
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
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia projektu"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-xl border border-pink-500 bg-black p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              style={{ objectPosition: "top left" }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-pink-500 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Zamknij podgląd"
            >
              ✕
            </button>
            <button
              onClick={() => setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1)}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-pink-500 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Poprzednie zdjęcie"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-pink-500 rounded-full p-2 hover:bg-pink-700 transition"
              aria-label="Następne zdjęcie"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
             <WebSteps />
             <WebGallery />
             <WebFeatures />
             <WebTestimonials />
             <InteractiveCards />
             </>
  );
}
