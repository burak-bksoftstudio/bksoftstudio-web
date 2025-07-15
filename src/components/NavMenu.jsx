import React, { useState, useEffect } from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const NavMenu = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 h-screen w-20 bg-black text-white flex flex-col justify-between items-center py-6 z-50 overflow-hidden"
    >
      {/* 🔵 LOGO */}
      <div className="rotate-[-90deg] font-extrabold tracking-widest text-lg">BK</div>

      {/* 🔄 Dikey kayan yazı */}
      <div className="relative flex-grow flex items-center justify-center overflow-hidden w-full">
        <div className="absolute animate-slide-vert text-[10px] font-semibold rotate-[-90deg] whitespace-nowrap tracking-widest text-gray-300">
          İşletmenize Dair Çözümler — BK SoftStudio
        </div>
      </div>

      {/* 🔗 Sosyal Medya + Tema */}
      <div className="flex flex-col items-center space-y-4">
        <a href="https://instagram.com/burakkiris" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-gray-400" />
        </a>
        <a href="https://github.com/burakkiris" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/burakkiris" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-gray-400" />
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          title="Tema Değiştir"
          className="mt-4 px-2 py-1 border rounded-full bg-white text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </motion.aside>
  )
}

export default NavMenu