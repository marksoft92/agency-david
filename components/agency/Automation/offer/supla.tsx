'use client';

export default function SuplaControlSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className=" text-sm font-semibold uppercase tracking-[4px]">
          Sterowanie urządzeniami Supla
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          Steruj bramą, garażem i światłami z telefonu
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Dzięki sterownikom Supla masz pełną kontrolę nad bramą wjazdową, garażem oraz oświetleniem — wszystko wygodnie przez aplikację mobilną.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Zdalne sterowanie, automatyzacje i integracje z systemami smart home zapewniają wygodę, bezpieczeństwo i oszczędność energii.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Zdalne sterowanie bramą wjazdową i garażem przez telefon</li>
            <li>Automatyzacja i scenariusze sterowania światłami</li>
            <li>Integracje z systemami Supla i innymi rozwiązaniami smart home</li>
            <li>Bezpieczny dostęp i szybka reakcja na zdarzenia</li>
            <li>Wsparcie i rozwój oprogramowania pod indywidualne potrzeby</li>
          </ul>
        </div>
      </div>

      {/* Sekcja z trzema zdjęciami */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="p-1 rounded-xl bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg shadow-green-600/50"
          >
            <img
              src={`/assets/images/automation/supla_${num}.jpg`}
              alt={`Widok aplikacji supla smart home ${num}`}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
