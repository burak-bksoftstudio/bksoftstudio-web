import React from 'react'
import { motion } from 'framer-motion'

const references = [
  {
    name: 'Zafer Sönmez',
    title: 'Akademisyen / TÜBİTAK Danışmanı',
    content: 'Burak’ın geliştirdiği TestFlow Genie, yazılım test süreçlerine yeni bir soluk getirdi. Disiplinli ve yaratıcı yaklaşımı takdire şayan.'
  },
  {
    name: 'Cemilenur Tanrıseven',
    title: 'Co-Founder @ Bulurmuyum.com',
    content: 'Bulurmuyum.com girişiminde birlikte çalışmak büyük keyifti. Ürün yönetimi ve yapay zeka kullanımındaki vizyonu bizi çok ileri taşıdı.'
  },
  {
    name: 'Şevket Yüksel',
    title: 'Yazılım Geliştirici @ InfluMatch',
    content: 'InfluMatch projesinde birlikte çalışırken, özellikle veriye dayalı öneri sistemlerinde büyük katkı sağladı. Sistematik ve çözüm odaklı bir ekip arkadaşı.'
  }
]

const References = () => {
  return (
    <section id="references" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        💬 Referanslar
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              “{ref.content}”
            </p>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {ref.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {ref.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default References