'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Sparkles, Eye, ShieldCheck } from 'lucide-react'; // dowolne ikony z lucide

const realizations = [
  {
    title: 'Zautomatyzowane bramy przesuwne',
    description:
      'Nowoczesne bramy przesuwne z możliwością sterowania z poziomu telefonu i integracją z systemem Supla.',
    image: '/assets/images/img_work9.webp',
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'Monitoring 4K – pełna kontrola',
    description:
      'Instalacje kamer BCS z podglądem na żywo na telewizorach Sony Bravia i aplikacjach mobilnych.',
    image: '/assets/images/img_work9.webp',
    icon: <Eye className="w-6 h-6 text-green-500" />,
  },
  {
    title: 'Oświetlenie automatyczne LED',
    description:
      'Inteligentne oświetlenie dostosowujące się do ruchu i pory dnia. Sterowanie głosem przez Google Assistant.',
    image: '/assets/images/img_work9.webp',
    icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
  },
];

export default function RealizationsSection() {
  return (
    <section className="bg-gray-950 py-16 px-4 md:px-16 relative overflow-hidden">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nasze najnowsze realizacje
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Zobacz, jak wdrażamy nowoczesne technologie w praktyce – automatyka, monitoring, oświetlenie i więcej.
        </motion.p>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay, Pagination]}
        className="pb-12"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {realizations.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden relative group hover:scale-[1.015] transition-transform"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
