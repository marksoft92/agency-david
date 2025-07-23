export default function CTA() {
    return (
        <section id="contact" className="py-24 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">Zainteresowany współpracą?</h2>
            <p className="text-white/70 mb-8">Skontaktuj się z nami, a wspólnie stworzymy coś wyjątkowego.</p>
            <a
                href="mailto:kontakt@twojafirma.pl"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-xl shadow-xl"
            >
                Napisz do nas
            </a>
        </section>
    );
}