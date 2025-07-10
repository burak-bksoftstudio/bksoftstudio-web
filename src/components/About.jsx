import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hakkımda
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-7 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Merhaba! Ben <strong>Burak Kırış</strong>, yapay zeka, frontend, test otomasyonu ve yazılım mühendisliği alanlarında aktif olarak projeler geliştiren bir yazılım geliştiricisiyim. 
          <br /><br />
          No-Code platformlardan Selenium test agentlarına kadar pek çok farklı alanda çözümler ürettim. Kullanıcı odaklı, yenilikçi ve sade arayüzler geliştirirken, performans ve kullanılabilirliğe de önem veririm.
        </motion.p>
      </div>
    </section>
  )
}

export default About