export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-xl font-bold text-pink-500">TwojaFirma</span>
                <div className="space-x-6 hidden md:flex">
                    <a href="#services" className="hover:text-pink-400">Strony i aplikacje</a>
                    <a href="#automation" className="hover:text-pink-400">Automatyka</a>
                    <a href="/kontakt" className="hover:text-pink-400">Kontakt</a>
                </div>
            </div>

        </nav>
    );
}