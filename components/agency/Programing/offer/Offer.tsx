'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuCamera, LuCpu, LuSmartphone } from 'react-icons/lu';

const TABS = [
    { id: 'supla', icon: <LuCpu size={32} />, label: 'Supla' },
    { id: 'sonoff', icon: <LuSmartphone size={32} />, label: 'Sonoff' },
    { id: 'camera', icon: <LuCamera size={32} />, label: 'Camera IPw' },
    { id: 'x', icon: <LuCamera size={32} />, label: 'Camera IPx' },
    { id: 'y', icon: <LuCamera size={32} />, label: 'Camera IPy' },
];

export default function SmartHomeTabs() {
    const [activeTab, setActiveTab] = useState('supla');
    const containerRef = useRef<HTMLDivElement>(null);
    const [tabCenters, setTabCenters] = useState<number[]>([]);
    const controls = useAnimation();

    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
        }
    }, []);

    useEffect(() => {
        function updatePositions() {
            if (!containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const tabs = containerRef.current.querySelectorAll<HTMLDivElement>('.tab-item');
            const centers = Array.from(tabs).map(el => {
                const rect = el.getBoundingClientRect();
                return rect.left + rect.width / 2 - containerRect.left;
            });
            setTabCenters(centers);
        }
        updatePositions();
        window.addEventListener('resize', updatePositions);
        return () => window.removeEventListener('resize', updatePositions);
    }, []);

    useEffect(() => {
        if (!pathRef.current || tabCenters.length === 0 || pathLength === 0) return;
        const activeIndex = TABS.findIndex(t => t.id === activeTab);
        const activeX = tabCenters[activeIndex];
        const containerWidth = containerRef.current!.offsetWidth;
        const percent = activeX / containerWidth;
        const targetOffset = pathLength - percent * pathLength;
        controls.start({
            strokeDashoffset: targetOffset,
            transition: { duration: 1, ease: 'easeInOut' },
        });
    }, [activeTab, tabCenters, pathLength, controls]);

    const renderContent = () => {
        switch (activeTab) {
            case 'supla':
                return <p className="text-lg">Sterowanie oświetleniem, bramą, gniazdkami i harmonogramami – wszystko w aplikacji Supla zintegrowanej z panelem Smart Home.</p>;
            case 'sonoff':
                return <p className="text-lg">Automatyka domowa na bazie Sonoff – sceny, czujniki, harmonogramy i sterowanie głosowe z Google Assistant.</p>;
            case 'camera':
                return <p className="text-lg">Podgląd na żywo z kamer IP, wykrywanie ruchu, rejestracja oraz pełna integracja z panelem sterowania.</p>;
            case 'x':
                return <p className="text-lg">Podgląd na żywo z kamer IP, wykrywanie ruchu, rejestracja oraz pełna integracja z panelem sterowania.</p>;
            case 'y':
                return <p className="text-lg">Podgląd na żywo z kamer IP, wykrywanie ruchu, rejestracja oraz pełna integracja z panelem sterowania.</p>;
        }
    };

    return (
        <section className="py-20 px-4 bg-black text-white flex flex-col items-center gap-16 select-none">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text mb-6">
                Oferta systemów Smart Home
            </h2>

            <div
                ref={containerRef}
                className="relative flex flex-col items-center w-full max-w-md"
            >
                <div className="flex gap-10 justify-center w-full relative z-10">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="tab-item flex flex-col items-center cursor-pointer relative"
                            >
                                <div
                                    className={`rounded-3xl w-20 h-20 flex items-center justify-center
                                        ${isActive ? `bg-black/60 border-2 border-transparent
                hover:border-pink-500 hover:shadow-pink-600/50
                transition-all duration-500` : 'bg-white/10 text-white'}
                                    `}
                                    style={{
                                        backgroundColor: isActive ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.6)',
                                        border: isActive ? '2px solid #ec4899' : '2px solid white', // pink-500
                                        boxShadow: isActive ? '0 0 20px rgba(34,211,238,0.5)' : 'none',   // cyan-400            
                                        transition: 'all 0.5s ease',
                                    }}

                                >
                                    {tab.icon}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex gap-10 justify-center w-full max-w-md">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <span
                            key={tab.id}
                            className={`mt-3 font-semibold text-sm text-center ${isActive ? 'text-cyan-400' : 'text-white/80'
                                }`}
                            style={{ width: 80 }}
                        >
                            {tab.label}
                        </span>
                    );
                })}
            </div>

            <div className="relative min-h-[120px] w-full max-w-3xl px-4 text-center">
                {renderContent()}
            </div>
        </section>
    );
}
