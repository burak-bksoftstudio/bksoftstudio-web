// src/components/ScrollIndicator.jsx
import React, { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects', 'references', 'contact']

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center space-y-3">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`w-3 h-3 rounded-full transition duration-300
            ${
              activeSection === section
                ? 'bg-black dark:bg-white scale-110'
                : 'bg-gray-400 hover:bg-black dark:hover:bg-white'
            }`}
        >
          <span className="sr-only">{section}</span>
        </a>
      ))}
    </div>
  )
}

export default ScrollIndicator