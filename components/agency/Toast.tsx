// components/Toast.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Toast({ message, onClose, bg }: any) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 2000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={"fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg z-50 text-sm font-medium " + bg}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  )
}
