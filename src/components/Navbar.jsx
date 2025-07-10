import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800 dark:text-white sticky top-0 z-50 transition-all duration-300">
      <h1 className="text-xl font-bold">Burak Kırış</h1>
      <div className="flex items-center space-x-4">
        <a href="#home" className="hover:underline">Anasayfa</a>
        <a href="#about" className="hover:underline">Hakkımda</a>
        <a href="#projects" className="hover:underline">Projeler</a>
        <a href="#references" className="hover:underline">Referanslar</a>
        <a href="#contact" className="hover:underline">İletişim</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar