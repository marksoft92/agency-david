'use client';

export default function WebsiteSection() {
  return (
    <section className="max-w-[1280px]   py-24 text-white bg-black flex flex-col gap-16  w-full flex items-center">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl  text-center  w-full flex items-center">
        <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
          Strony internetowe
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Profesjonalne strony dla Twojego biznesu
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent  opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
          Tworzymy szybkie, nowoczesne i zoptymalizowane pod SEO strony www, które wyróżnią Cię na tle konkurencji i zwiększą widoczność w sieci.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl ">
          Nasze realizacje są w pełni responsywne, estetyczne i zgodne z najnowszymi standardami UX/UI.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl  flex flex-col md:flex-row gap-10 items-center  w-full flex items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Indywidualne projekty graficzne</li>
            <li>Pełna responsywność (RWD)</li>
            <li>Integracja z CMS lub systemami zewnętrznymi</li>
            <li>Optymalizacja SEO i wydajności</li>
            <li>Szybkość ładowania i bezpieczeństwo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
