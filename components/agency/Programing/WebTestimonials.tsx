'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const testimonials = [
  {
    name: "Katarzyna Wiśniewska",
    photo: "/assets/images/users/kasia.webp",
    text: "Profesjonalne podejście, szybka realizacja i świetne wsparcie przy tworzeniu strony internetowej. Dzięki nim nasza widoczność w sieci znacząco wzrosła.",
  },
  {
    name: "Tomasz Nowak",
    photo: "/assets/images/users/tomasz.webp",
    text: "Sklep internetowy stworzony przez zespół to strzał w dziesiątkę – prosty w obsłudze i zoptymalizowany pod SEO. Efekty sprzedażowe widoczne od pierwszych tygodni.",
  },
  {
    name: "Marta Kowalczyk",
    photo: "/assets/images/users/marta.webp",
    text: "Aplikacja mobilna spełniła nasze oczekiwania w 100%. Intuicyjny interfejs, stabilność i szybkie wsparcie techniczne. Polecam każdemu, kto chce rozwijać biznes mobilnie.",
  },
];

export default function WebTestimonials() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-400"
        >
          Opinie naszych klientów
        </motion.h2>
      </div>
      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay={{ delay: 4500 }}>
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
              <p className="mb-4 text-white/80 italic leading-relaxed">&quot;{text}&quot;</p>
              <h3 className="text-lg font-semibold text-pink-400">{name}</h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
