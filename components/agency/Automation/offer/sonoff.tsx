'use client';

export default function WebAppsSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-16">
      {/* Nagłówki */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto text-center">
        <h4 className="text-green-400 text-sm font-semibold uppercase tracking-[4px]">
          Customowe oprogramowanie
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
          Panel Sonoff i Smart Home na miarę Twoich potrzeb
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Tworzymy dedykowane panele sterowania Sonoff oraz systemy smart home, które pozwalają zintegrować wszystkie urządzenia i kontrolować je z jednego miejsca.
        </p>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Realizujemy indywidualne projekty dopasowane do Twoich wymagań — od prostych aplikacji mobilnych po kompleksowe dashboardy i automatyzacje.
        </p>
      </div>

      {/* Obraz + info */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Co oferujemy?
          </h2>
          <ul className="list-disc list-inside text-[#A5A5A5] space-y-3 text-lg">
            <li>Dedykowane panele sterowania Sonoff i urządzeniami smart home</li>
            <li>Integracje z popularnymi systemami i protokołami (MQTT, Tuya, Home Assistant)</li>
            <li>Mobilne aplikacje i dashboardy w czasie rzeczywistym</li>
            <li>Automatyzacje, scenariusze i sterowanie głosowe (Google, Alexa)</li>
            <li>Wsparcie, rozwój i aktualizacje oprogramowania</li>
          </ul>
        </div>
      </div>

      {/* Sekcja ze zdjęciami */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="p-1 rounded-xl bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg shadow-green-600/50"
          >
            <img
              src={`/assets/images/smarthome/app${num}.jpg`}
              alt={`Widok panelu smart home ${num}`}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
