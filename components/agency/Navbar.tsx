'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionColorClasses: Record<string, string> = {
        automation: 'bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text hover:text-green-400',
        services: 'bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text',
        contact: 'text-cyan-400',
    };
    const hover: Record<string, string> = {
        automation: ' hover:text-green-400',
        services: 'hover:text-pink-500',
    };

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
                { threshold: 0.4 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

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

    const menuLinks = [
        { href: '/#services', label: 'Strony i aplikacje' },
        { href: '/#automation', label: 'Automatyka' },
        { href: '/oferta', label: 'Oferta' },
        { href: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <span className="text-xl font-bold transition-all duration-300">
                    <Link href="/">BIENKOWSKI<span className={logoClass}>.DEV</span></Link>
                </span>

                {/* Menu desktop */}
                <div className="space-x-6 hidden md:flex text-white">
                    {menuLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={navClass}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger - mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu mobilne */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4 flex flex-col space-y-4 text-white">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${navClass} block`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
