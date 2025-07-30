'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuCpu, LuSmartphone, LuMonitor, LuFileText, LuStore, LuNetwork } from 'react-icons/lu';

import Webpage from './webpage'
import Webapp from './webapp'
import Shop from './shop'

import Seo from './seo'
import Mobileapp from './mobileapp'

const TABS = [
    { id: 'webpage', icon: <LuFileText size={32} />, label: 'Strony Internetowe' },
    { id: 'webapp', icon: <LuMonitor size={32} />, label: 'Aplikacje webowe' },
    { id: 'mobileapp', icon: <LuSmartphone size={32} />, label: 'Aplikacje mobilne' },
    { id: 'shop', icon: <LuStore size={32} />, label: 'Sklepy Internetowe' },
    { id: 'seo', icon: <LuNetwork size={32} />, label: 'Seo - Marketing' },
];

export default function SmartHomeTabs() {
    const [activeTab, setActiveTab] = useState('webpage');
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
            case 'webpage':
                return <Webpage />;
            case 'webapp':
                return <Webapp />;
            case 'mobileapp':
                return <Mobileapp />;
            case 'shop':
                return <Shop />;
            case 'seo':
                return <Seo />;
        }
    };

    return (
        <section id="services" className="py-20 px-4 bg-black text-white flex flex-col items-center gap-16 select-none">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text mb-6">
                Oferta systemów Smart Home
            </h2>

            <div
                ref={containerRef}
                className="relative flex flex-col items-center w-full max-w-md"
            >
                <div className="flex gap-10 justify-center w-full relative z-10 flex-nowrap md:flex-nowrap max-md:flex-wrap">
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
                                <span
                            onClick={() => setActiveTab(tab.id)}
                            key={tab.id}
                            className={`cursor-pointer mt-3 font-semibold text-sm text-center ${isActive ? 'text-cyan-400' : 'text-white/80'
                                }`}
                            style={{ width: 80 }}
                        >
                            {tab.label}
                        </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            

            <div className="relative min-h-[120px] w-full text-center">
                {renderContent()}
            </div>
        </section>
    );
}
