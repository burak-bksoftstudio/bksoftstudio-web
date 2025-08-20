// src/pages/References.jsx
import React from 'react'
import { motion } from 'framer-motion'

const references = [
  {
    name: 'İlhan Arkan',
    title: 'İlhan Arkan Mimarlık',
    content:
      'BK SoftStudio ile web sitemizi tam istediğimiz tasarım ve profesyonellikte hayata geçirdik. Ayrıca sosyal medya yönetimi için de birlikte çalışmaya başladık. Tüm süreç boyunca iletişimde kalarak sorunsuz ve keyifli bir iş birliği sağladık.',
  },
  {
    name: 'Murat Akdere',
    title: 'Başak Fındık',
    content:
      'BK SoftStudio ekibiyle yaptığımız olumlu görüşmeler sonrası web sitemizi hem zamanında hem de isteklerimiz doğrultusunda bi çalışmayla teslim aldık ve sorunsuz olarak kullanıyoruz.',
  },
  {
    name: 'Latif Sarıcaoğlu',
    title: 'Karayaka Kuzu Et Mangal',
    content:
      'Restoranımız için QR menü sistemi entegrasyonu ve Google işletme kaydı BK SoftStudio tarafından yapıldı. Sosyal medya hesaplarımızın yönetimi ve içerik üretimi ile markamızın dijital görünürlüğü ciddi şekilde arttı.',
  },
]

const logos = [
  'alpinepark.png',
  'basaklogo.png',
  'insaatlogo.png',
  'karayakalogo.png',
  'lslogo.png',
  'mimarliklogo.svg',
]

const References = () => {
  return (
    <motion.section
      id="references"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 px-6 md:px-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* 💬 Yorumlar */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12 text-center"
      >
        💬 Yorumlar
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-sm leading-relaxed flex-1">
              “{ref.content}”
            </p>
            <div className="mt-4">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {ref.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{ref.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🏢 İş Birliklerimiz */}
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10"
      >
        🤝 İş Birliklerimiz
      </motion.h3>

      {/* Logoların akış alanı */}
      <div className="overflow-hidden py-6">
        <div className="flex gap-16 animate-scroll-slow">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-40 w-64 rounded-xl 
                         bg-gray-200 dark:bg-gray-800 
                         shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.7)]
                         hover:scale-105"
            >
              <img
                src={`/logos/${logo}`}
                alt={logo}
                className={`object-contain transition-transform duration-500 hover:scale-125 ${
                  logo === 'mimarliklogo.svg'
                    ? 'h-16 w-auto max-w-[150px]'
                    : 'h-32 w-auto'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          width: max-content;
          animation: scroll-slow 60s linear infinite;
        }
      `}</style>
    </motion.section>
  )
}

export default References