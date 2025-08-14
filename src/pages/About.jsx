// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* 🔹 Üstte ikon */}
        <motion.div
          className="text-4xl mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          💡
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight 
                     text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hakkımızda
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-7 text-gray-800 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong>BK SoftStudio</strong>, Samsun merkezli bir yazılım ve medya stüdyosudur. 
          4 yıldır; web tasarım, mobil uygulama, sosyal medya yönetimi, 
          video & drone çekimi, 3D baskı ve özel yazılım projeleri ile 
          işletmelere yenilikçi dijital çözümler sunuyoruz.
          <br /><br />
          Ekibimiz, her projede modern tasarım, yüksek performans ve 
          yaratıcı yaklaşımlarla işletmenize değer katmayı hedefler.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About