import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Burak Kırış. Tüm hakları saklıdır.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/burakkiris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/burakkiris"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer