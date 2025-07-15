// src/components/Contact.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen py-24 px-6 md:px-24 bg-black text-white flex items-center"
    >
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">İletişime Geçin</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Her türlü iş birliği, proje veya danışmanlık talepleriniz için bana ulaşmaktan çekinmeyin.
        </p>
        <a
          href="mailto:burak@example.com"
          className="inline-flex items-center gap-3 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          <FiMail className="text-xl" />
          E-Posta Gönder
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Contact