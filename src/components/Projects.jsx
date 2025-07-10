import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'No-Code API Panel',
    description: 'Kullanıcıların teknik bilgiye ihtiyaç duymadan kendi API’lerini tanımlamasını sağlar.',
    link: 'https://github.com/burakkiris/no-code-api-panel'
  },
  {
    title: 'TestFlow Genie',
    description: 'Doğal dil komutlarıyla otomatik Selenium testi gerçekleştiren AI destekli platform.',
    link: 'https://github.com/burakkiris/testflow-genie'
  },
  {
    title: 'InfluMatch',
    description: 'Influencer verilerini analiz ederek en uygun eşleşmeleri öneren yapay zeka tabanlı sistem.',
    link: 'https://github.com/burakkiris/influmatch'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        🚀 Projelerim
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-5">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              GitHub’da Gör
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects