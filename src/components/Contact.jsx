import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
      >
        📬 İletişim
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md"
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Benimle çalışmak ister misiniz? Yeni projelere ve iş birliklerine her zaman açığım.
        </p>
        <div className="space-y-4">
          <div>
            <span className="block text-gray-500 dark:text-gray-400">E-posta:</span>
            <a
              href="mailto:burakkiris@gmail.com"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              burakkiris@gmail.com
            </a>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400">GitHub:</span>
            <a
              href="https://github.com/burakkiris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              github.com/burakkiris
            </a>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400">LinkedIn:</span>
            <a
              href="https://linkedin.com/in/burakkiris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              linkedin.com/in/burakkiris
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact