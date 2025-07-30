'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import AutomationOffer from '@/components/agency/Automation/offer/Offer';
import ProgrammingOffer from '@/components/agency/Programing/offer/Offer';
import CTASectionPrograming from './Programing/CTA';
import CTASectionAutomation from './Automation/CTA';

export default function OffersPage() {
  const [activeOffer, setActiveOffer] = useState<'automation' | 'programming'>('automation');

  const buttons = [
    {
      id: 'automation',
      label: 'Automatyka',
      bgFrom: 'from-green-400',
      bgTo: 'to-yellow-400',
      textColorActive: 'text-black',
      shadowColor: 'shadow-[0_0_25px_rgba(132,204,22,0.8)]',
      focus: 'focus:ring-green-400'
    },
    {
      id: 'programming',
      label: 'Strony i aplikacje',
      bgFrom: 'from-pink-500',
      bgTo: 'to-cyan-400',
      textColorActive: 'text-black',
      shadowColor: 'shadow-[0_0_25px_rgba(236,72,153,0.8)]',
      focus: 'focus:ring-pink-500'
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <nav className="flex gap-8 mb-10">
        {buttons.map(({ id, label, bgFrom, bgTo, textColorActive, shadowColor,focus }) => {
          const isActive = activeOffer === id;
          return (
            <button
              key={id}
              onClick={() => setActiveOffer(id)}
              className={`
                relative px-8 py-3 rounded-3xl font-semibold transition
                ${isActive
                  ? `bg-gradient-to-r ${bgFrom} ${bgTo} ${textColorActive} ${shadowColor}`
                  : 'bg-white/10 text-white hover:bg-white/20'}
                focus:outline-none focus:ring-4 focus:ring-offset-2 ${focus}
              `}
            >
              {/* Animowany efekt gradientu po najechaniu na nieaktywny */}
              {!isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-400 opacity-0 hover:opacity-30 transition-opacity pointer-events-none"
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait" initial={false}>
          {activeOffer === 'automation' && (
            <motion.div
              key="automation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <AutomationOffer />
              <CTASectionAutomation />
            </motion.div>
          )}
          {activeOffer === 'programming' && (
            <motion.div
              key="programming"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <ProgrammingOffer />
              <CTASectionPrograming />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
