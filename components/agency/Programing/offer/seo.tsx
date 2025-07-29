'use client';

export default function SeoMarketingSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
          SEO i marketing
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Zwiększ widoczność i sprzedaż online
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Kompleksowe działania SEO i kampanie marketingowe dostosowane do Twoich celów biznesowych.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Pomagamy pozyskać wartościowy ruch i poprawić konwersje poprzez skuteczne strategie.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Audyt SEO i optymalizacja techniczna</li>
            <li>Pozycjonowanie lokalne i globalne</li>
            <li>Google Ads i kampanie reklamowe</li>
            <li>Content marketing i analiza słów kluczowych</li>
            <li>Raportowanie i optymalizacja konwersji</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
