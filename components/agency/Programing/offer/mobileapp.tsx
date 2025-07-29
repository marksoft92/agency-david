'use client';

export default function MobileAppsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
          Aplikacje mobilne
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Natywne i hybrydowe aplikacje mobilne
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Tworzymy wydajne aplikacje mobilne na Android i iOS, które zapewniają najlepsze doświadczenia użytkownika.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Łączymy nowoczesny design z niezawodną technologią, by Twoja aplikacja wyróżniała się na rynku.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Prototypy i projektowanie UX/UI</li>
            <li>Natywne i hybrydowe rozwiązania</li>
            <li>Integracje z API i backendami</li>
            <li>Bezpieczne logowanie i powiadomienia push</li>
            <li>Wsparcie i rozwój aplikacji</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
