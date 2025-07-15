// src/components/Services.jsx
import React from 'react'
import { FaGlobe, FaMobileAlt, FaDesktop, FaVideo, FaInstagram, FaChartLine, FaQrcode, FaCube, FaPrint, FaCogs } from 'react-icons/fa'
import { motion } from 'framer-motion'
import TeamSection from '../components/TeamSection'

const services = [
  {
    icon: <FaGlobe className="text-3xl text-indigo-500" />, title: 'Web Site Geliştirme',
    description: 'Kurumsal ve özel web siteleri tasarlayıp geliştiriyoruz.'
  },
  {
    icon: <FaMobileAlt className="text-3xl text-indigo-500" />, title: 'Mobil Uygulama Geliştirme',
    description: 'Android ve iOS için performanslı uygulamalar üretiyoruz.'
  },
  {
    icon: <FaDesktop className="text-3xl text-indigo-500" />, title: 'Masaüstü Yazılım',
    description: 'Masaüstü uygulamalarla özel çözümler sunuyoruz.'
  },
  {
    icon: <FaVideo className="text-3xl text-indigo-500" />, title: 'Video & Tanıtım Çekimi',
    description: 'Stüdyo ve dış mekan çekimleriyle profesyonel içerik üretiyoruz.'
  },
  {
    icon: <FaInstagram className="text-3xl text-indigo-500" />, title: 'Sosyal Medya Yönetimi',
    description: 'Markanızı sosyal medyada büyütmenize yardımcı oluyoruz.'
  },
  {
    icon: <FaQrcode className="text-3xl text-indigo-500" />, title: 'QR Menü Sistemleri',
    description: 'Restoranlar için dijital QR menü sistemleri sunuyoruz.'
  },
  {
    icon: <FaCube className="text-3xl text-indigo-500" />, title: '3D Yazıcı Çözümleri',
    description: '3D baskı hizmetleri, cihaz temini ve özel üretim çözümleri.'
  },
  {
    icon: <FaCogs className="text-3xl text-indigo-500" />, title: 'Özel Yazılım Projeleri',
    description: 'İşinize özel, tamamen ihtiyaca yönelik yazılım çözümleri.'
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-24 bg-gray-50 dark:bg-gray-900 text-center min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
        🚀 Hizmetlerimiz
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 👥 Ekip Bölümü */}
      <div className="mt-24">
        <TeamSection />
      </div>
    </section>
  )
}

export default Services