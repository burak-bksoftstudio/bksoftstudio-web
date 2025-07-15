// src/components/TeamSection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Burak Enes Kırış',
    role: 'Sosyal Medya Yöneticisi',
    task: 'Sosyal Medya Yönetimi'
  },
  {
    name: 'Tuğçe Kepen',
    role: 'Mobil Uygulama Geliştirici',
    task: 'Yazılım Mühendisi'
  },
  {
    name: 'Emir Sandıkçı',
    role: 'Web Geliştirici',
    task: 'Web Geliştirme'
  },
  {
    name: 'Nihal Ayar',
    role: 'Fotoğrafçı',
    task: 'Video ve Fotoğraf Çekimi'
  },
  {
    name: 'Kerem Kırış',
    role: 'Drone Pilotu',
    task: 'Ticari İHA Pilotu'
  },
  {
    name: 'Cemilenur Tanrıseven',
    role: 'Yazılım Mühendisi',
    task: 'Reklam ve İşbirliği'
  },
  {
    name: 'Elif Çabık',
    role: 'Endüstri Mühendisi',
    task: '3D Model Baskı Üretim ve Satış'
  }
]

const TeamSection = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white dark:bg-gray-950 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
        👥 Ekibimiz
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-gray-800 dark:text-white">{member.role}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{member.task}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection