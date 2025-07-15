// src/components/References.jsx
import React from 'react'
import { motion } from 'framer-motion'

const references = [
  {
    name: 'Zafer Sönmez',
    title: 'Akademisyen / TÜBİTAK Danışmanı',
    content:
      'Burak’ın geliştirdiği TestFlow Genie, yazılım test süreçlerine yeni bir soluk getirdi. Disiplinli ve yaratıcı yaklaşımı takdire şayan.',
  },
  {
    name: 'Cemilenur Tanrıseven',
    title: 'Co-Founder @ Bulurmuyum.com',
    content:
      'Bulurmuyum.com girişiminde birlikte çalışmak büyük keyifti. Ürün yönetimi ve yapay zeka kullanımındaki vizyonu bizi çok ileri taşıdı.',
  },
  {
    name: 'Şevket Yüksel',
    title: 'Yazılım Geliştirici @ InfluMatch',
    content:
      'InfluMatch projesinde birlikte çalışırken, özellikle veriye dayalı öneri sistemlerinde büyük katkı sağladı. Sistematik ve çözüm odaklı bir ekip arkadaşı.',
  },
]

const References = () => {
  return (
    <motion.section
      id="references"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen py-24 px-6 md:px-24 bg-white dark:bg-gray-900"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16"
      >
        💬 Referanslar
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-sm leading-relaxed">
              “{ref.content}”
            </p>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              {ref.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{ref.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default References