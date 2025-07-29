'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LuVideo, LuCpu, LuSmartphone, } from 'react-icons/lu';
import Sonoff from "./sonoff"
import CameraIP from "./cameraIP"
import Supla from "./supla"

const TABS = [
    { id: 'supla', icon: <LuCpu size={32} />, label: 'Automatyzacje' },
    { id: 'sonoff', icon: <LuSmartphone size={32} />, label: 'SmartPanele' },
    { id: 'camera', icon: <LuVideo size={32} />, label: 'Monitoring' },
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
                return <Supla />;
            case 'sonoff':
                return <Sonoff />;
            case 'camera':
                return <CameraIP />;
        }
    };

    return (
        <section className="py-20 px-4 bg-black text-white flex flex-col items-center gap-16 select-none">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 text-transparent bg-clip-text mb-6">
                Automatyzacje i Bezpieczeństwo
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
                                        ${isActive ? 'bg-gradient-to-br from-green-400 to-yellow-400 text-black shadow-[0_0_15px_3px_rgba(132,204,22,0.75)]' : 'bg-white/10 text-white'}
                                    `}
                                    style={{
                                        filter: isActive ? 'drop-shadow(0 0 10px rgba(132,204,22,0.7))' : 'none',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',
                                    }}
                                >
                                    {tab.icon}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <svg
                    className="absolute bottom-0 left-0 right-0 mx-auto pointer-events-none top-24 left-8"
                    width="100%"
                    height="40"
                    viewBox="0 0 300 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <linearGradient id="ekgGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#4ade80" />
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="#4ade80" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        ref={pathRef}
                        d="M10 20 L40 20 L50 5 L60 35 L70 20 L100 20 L110 10 L120 30 L130 20 L160 20 L170 5 L180 35 L190 20 L220 20 L230 10 L240 30 L250 20 L280 20 L290 20"
                        stroke="url(#ekgGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={pathLength}
                        strokeDashoffset={pathLength}
                        initial={{ strokeDashoffset: pathLength }}
                        animate={controls}
                    />
                </svg>
            </div>

            <div className="flex gap-10 justify-center w-full max-w-md">
                {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <span
                            key={tab.id}
                            className={`mt-3 font-semibold text-sm text-center ${isActive ? 'text-yellow-400' : 'text-white/80'
                                }`}
                            style={{ width: 80 }}
                        >
                            {tab.label}
                        </span>
                    );
                })}
            </div>

            <div className="relative min-h-[120px] w-full  px-4 text-center">
                {renderContent()}
            </div>
        </section>
    );
}
