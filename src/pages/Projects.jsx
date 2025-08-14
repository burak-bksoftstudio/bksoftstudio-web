import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'InfluMatch',
    description: 'Yapay zeka destekli influencer eşleştirme uygulaması',
    link: 'https://github.com/burakkiris/influmatch',
  },
  {
    title: 'No-Code API Panel',
    description: 'Tek satır kod yazmadan API oluşturma paneli',
    link: 'https://github.com/burakkiris/no-code-api-panel',
  },
  {
    title: 'TestFlow Genie',
    description: 'Doğal dil komutlarıyla web sitesi test etme aracı',
    link: 'https://github.com/burakkiris/testflow-genie',
  },
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-24 bg-gray-50 dark:bg-gray-900" // ⬅️ Daha az boşluk
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12"
      >
        🚀 Projelerim
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={800}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
              >
                GitHub'da Görüntüle →
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects