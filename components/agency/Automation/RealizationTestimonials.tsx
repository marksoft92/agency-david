'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: "Jan Kowalski",
    photo: "/assets/images/users/jan.webp",
    text: "Profesjonalna firma, montaż bramy i systemu Supla poszedł szybko i bezproblemowo.",
  },
  {
    name: "Anna Nowak",
    photo: "/assets/images/users/anna.webp",
    text: "Monitoring BCS działa znakomicie, a panel ścienny jest intuicyjny i nowoczesny.",
  },
  {
    name: "Michał Wiśniewski",
    photo: "/assets/images/users/michal.webp",
    text: "Polecam z całego serca! Indywidualne podejście i świetne wsparcie techniczne.",
  },
];

export default function RealizationsTestimonials() {
  return (
    <section className="bg-gradient-to-tr from-[#010101] to-[#0a0a0a] py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-400"
        >
          Opinie naszych klientów
        </motion.h2>
      </div>
      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay={{ delay: 4000 }}>
        {testimonials.map(({ name, photo, text }, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="max-w-xl mx-auto bg-white/10 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={photo}
                alt={`Zdjęcie klienta ${name}`}
                className="w-20 h-20 rounded-full mb-4 object-cover"
                loading="lazy"
              />
              <p className="mb-4 text-white/80 italic">&quot;{text}&quot;</p>
              <h3 className="text-lg font-semibold text-blue-300">{name}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
