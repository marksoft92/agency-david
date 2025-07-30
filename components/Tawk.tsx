'use client';

export default function ContactChatSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-24 text-white bg-black flex flex-col gap-12">
      {/* Nagłówek */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center">
        <h4 className="text-white text-sm font-semibold uppercase tracking-[4px]">
          Kontakt
        </h4>
        <h1 className="text-5xl font-oswald font-bold uppercase leading-tight max-md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Porozmawiaj z nami na żywo
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto opacity-80 rounded"></div>
        <p className="text-[#A5A5A5] text-lg leading-relaxed tracking-wide max-w-3xl mx-auto">
          Jesteśmy dostępni online, aby pomóc Ci szybko i skutecznie. Skorzystaj z czatu po prawej stronie.
        </p>
      </div>

      {/* Chat iframe */}
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-lg h-[600px] w-full">
        <iframe
          src="https://tawk.to/chat/68764f2678065b190e3a8554/1j1dioe7l"
          className="w-full h-full"
          allow="microphone; camera"
          title="Live Chat Tawk.to"
        />
      </div>
    </section>
  );
}
