export default function SectionServices() {
    return (
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-pink-400">Strony i aplikacje</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Strony internetowe</h3>
                    <p className="text-white/70">Responsywne, szybkie, z naciskiem na SEO i UX.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Aplikacje webowe</h3>
                    <p className="text-white/70">Systemy panelowe, dashboardy, aplikacje SPA.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Aplikacje Android</h3>
                    <p className="text-white/70">Nowoczesne aplikacje w Kotlin, React Native lub WebView.</p>
                </div>
            </div>
        </section>
    );
}