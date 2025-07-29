'use client';

export default function WebsiteSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className="text-green-400 text-sm font-semibold uppercase tracking-[4px]">
          Monitoring i Kamery IP
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          Profesjonalne systemy monitoringu dla Twojego bezpieczeństwa
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Instalujemy nowoczesne kamery IP o wysokiej rozdzielczości, które zapewniają stały podgląd oraz nagrania wysokiej jakości — dostępne zdalnie na telefonie czy komputerze.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Nasze systemy są niezawodne, łatwe w obsłudze i wyposażone w funkcje takie jak detekcja ruchu, powiadomienia oraz integracja z automatyką domu i bram.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Kamery IP o rozdzielczości Full HD i 4K</li>
            <li>Zdalny dostęp i podgląd na żywo przez aplikację mobilną</li>
            <li>Detekcja ruchu i inteligentne powiadomienia</li>
            <li>Integracja z systemem smart home oraz automatyką bram i garażu</li>
            <li>Profesjonalny montaż i konfiguracja</li>
          </ul>
        </div>
        {/* Możesz tutaj dodać obraz, jeśli chcesz, np. <img> lub komponent <Image> */}
      </div>
    </section>
  );
}
