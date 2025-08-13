'use client';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 mt-24 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo lub nazwa firmy */}
        <div className="text-xl font-bold tracking-widest text-white/80">
          BIENKOWSKI<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">.DEV</span>
        </div>

        {/* Nawigacja */}
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="footer-link">Strona główna</a>
          <a href="#services" className="footer-link">Usługi</a>
          <a href="/oferta" className="footer-link">Oferta</a>
          <a href="/kontakt" className="footer-link">Kontakt</a>
        </nav>

        {/* Social media */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61579197578088"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white/30 text-xs py-4 border-t border-white/10">
        &copy; {new Date().getFullYear()} BIENKOWSKI.DEV Wszelkie prawa zastrzeżone.
      </div>

      {/* Neon border line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50 animate-pulse" />
    </footer>
  );
}
