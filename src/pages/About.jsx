// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 md:px-24 bg-white dark:bg-gray-900"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hakkımda
        </motion.h2>

        <motion.p
          className="text-lg leading-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xl font-semibold text-black dark:text-white">
            Merhaba! Ben <strong>Burak Kırış</strong>.
          </span>{' '}
          Yapay zeka, frontend, test otomasyonu ve yazılım mühendisliği konularında üretken projeler
          geliştiren bir yazılım geliştiricisiyim.
          <br /><br />
          No-Code platformlardan Selenium tabanlı test agentlarına kadar birçok alanda yenilikçi
          çözümler geliştirdim. Kullanıcı deneyimi, sade tasarım ve yüksek performansı öncelik alarak
          çalışırım.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About