export default function SectionAutomation() {
    return (
        <section id="automation" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Automatyka i smart home</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Kamery IP</h3>
                    <p className="text-white/70">Podgląd kamer na telefonie, tablecie i telewizorze.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Bramy i garaże</h3>
                    <p className="text-white/70">Sterowanie bramą przez aplikację, harmonogramy i automatyzacja.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Panele ścienne</h3>
                    <p className="text-white/70">Dashboard do sterowania domem (Supla, Tuya, BCS, itp.).</p>
                </div>
            </div>
        </section>
    );
}