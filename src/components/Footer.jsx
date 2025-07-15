// src/components/Footer.jsx
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-12"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Burak Kırış. Tüm hakları saklıdır.
      </p>
      <div className="mt-3 flex justify-center space-x-6">
        <a
          href="https://github.com/burakkiris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/burakkiris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  )
}

export default Footer