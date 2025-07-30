'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Mapowanie sekcji na klasy kolorów
  const sectionColorClasses: Record<string, string> = {
    automation: 'bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text hover:text-green-400',
    services: 'bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text',
    contact: 'text-cyan-400',
  };
  const hover: Record<string, string> = {
    automation: ' hover:text-green-400',
    services: 'hover:text-pink-500',

  };

  // Przy scrollowaniu wykrywa, która sekcja jest aktualnie widoczna
  useEffect(() => {
    const sectionIds = ['automation', 'services', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.4, // Widoczność co najmniej 40%
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Jeśli jesteśmy na konkretnej podstronie – nadpisz
  const logoClass =
    pathname === '/smart-home'
      ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text'
      : pathname === '/produkty-cyfrowe'
        ? 'text-pink-500'
        : activeSection
          ? sectionColorClasses[activeSection] ?? ''
          : '';



const navClass = 
pathname === '/smart-home'
  ? 'bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text'
  : pathname === '/produkty-cyfrowe'
    ? 'text-pink-500'
    : activeSection
      ? hover[activeSection] ?? ''
      : '';

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className={`text-xl font-bold transition-all duration-300 `}>
          <Link
            href="/">BIENKOWSKI<span className={logoClass}>.DEV</span></Link>

        </span>
        <div className="space-x-6 hidden md:flex text-white">
          <a href="/#services" className={navClass}>Strony i aplikacje</a>
          <a href="/#automation" className={navClass}>Automatyka</a>
          <a href="/oferta" className={navClass}>Oferta</a>
          <a href="/#contact" className={navClass}>Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
