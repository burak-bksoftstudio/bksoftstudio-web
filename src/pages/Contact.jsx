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
      className="py-16 px-6 md:px-24 bg-black text-white flex flex-col items-center justify-center space-y-10"
    >
      {/* Başlık ve içerik */}
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          İletişime Geçin
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Her türlü iş birliği, proje veya danışmanlık talepleriniz için bana ulaşmaktan çekinmeyin.
        </p>
        <a
          href="mailto:burakkrss@gmail.com"
          className="inline-flex items-center gap-3 bg-white text-black font-medium 
                     px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          <FiMail className="text-xl" />
          E-Posta Gönder
        </a>
      </motion.div>

      {/* Alt bilgi (Footer yerine) */}
      <div className="text-center text-gray-400 text-sm space-y-2 mt-6">
        <p>© 2025 Burak Kırış. Tüm hakları saklıdır.</p>
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://github.com/burakkiris"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/burakkiris"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact