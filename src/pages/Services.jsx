// src/components/Services.jsx
import {
  FaGlobe, FaMobileAlt, FaDesktop, FaVideo,
  FaInstagram, FaQrcode, FaCube, FaCogs, FaCamera
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import TeamSection from '../components/TeamSection'
import { ParallaxSection } from '../components/AppleParallax'

const services = [
  { icon: <FaGlobe className="text-3xl text-indigo-500" />, title: 'Web Site Geliştirme', description: 'Kurumsal ve özel web siteleri tasarlayıp geliştiriyoruz.' },
  { icon: <FaMobileAlt className="text-3xl text-indigo-500" />, title: 'Mobil Uygulama Geliştirme', description: 'Android ve iOS için performanslı uygulamalar üretiyoruz.' },
  { icon: <FaDesktop className="text-3xl text-indigo-500" />, title: 'Masaüstü Yazılım', description: 'Masaüstü uygulamalarla özel çözümler sunuyoruz.' },
  { icon: <FaVideo className="text-3xl text-indigo-500" />, title: 'Video & Tanıtım Çekimi', description: 'Stüdyo ve dış mekan çekimleriyle profesyonel içerik üretiyoruz.' },
  { icon: <FaInstagram className="text-3xl text-indigo-500" />, title: 'Sosyal Medya Yönetimi', description: 'Markanızı sosyal medyada büyütmenize yardımcı oluyoruz.' },
  { icon: <FaQrcode className="text-3xl text-indigo-500" />, title: 'QR Menü Sistemleri', description: 'Restoranlar için dijital QR menü sistemleri sunuyoruz.' },
  { icon: <FaCube className="text-3xl text-indigo-500" />, title: '3D Yazıcı Çözümleri', description: '3D baskı hizmetleri, cihaz temini ve özel üretim çözümleri.' },
  { icon: <FaCamera className="text-3xl text-indigo-500" />, title: 'Reklam & Tanıtım Modelliği', description: 'Ürün ve marka çekimlerinde profesyonel modellik hizmetleri sunuyoruz.' },
  { icon: <FaCogs className="text-3xl text-indigo-500" />, title: 'Özel Yazılım Projeleri', description: 'İşinize özel, tamamen ihtiyaca yönelik yazılım çözümleri.' },
]

const team = [
  {
    name: 'Burak K.',
    role: 'Proje Sorumlusu',
    task: 'İş geliştirme, müşteri ilişkileri ve proje koordinasyonu'
  },
  {
    name: 'Tuğçe B.',
    role: 'Mobil Uygulama Geliştirici',
    task: 'Yazılım Mühendisi'
  },
  {
    name: 'Emir S.',
    role: 'Web Geliştirici',
    task: 'Web Geliştirme'
  },
  {
    name: 'Nihal A.',
    role: 'Fotoğrafçı',
    task: 'Video ve Fotoğraf Çekimi'
  },
  {
    name: 'Kerem K.',
    role: 'Drone Pilotu',
    task: 'Ticari İHA Pilotu'
  },
  {
    name: 'Cemilenur T.',
    role: 'Yazılım Mühendisi',
    task: 'Reklam ve İşbirliği'
  },
  {
    name: 'Elif Ç.',
    role: 'Endüstri Mühendisi',
    task: '3D Model Baskı Üretim ve Satış'
  },
  {
    name: 'Dilay B.',
    role: 'Model',
    task: 'Reklam & Tanıtım Modelliği'
  },
  {
    name: 'Şevval B.',
    role: 'Grafik Tasarımcı & Video Prodüksiyon',
    task: 'Görsel içerikler, video prodüksiyon, kurumsal tasarım ve sosyal medya içerik yönetimi'
  }
]

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-20 bg-gray-50 dark:bg-black text-center min-h-screen transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxSection speed={0.4}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection speed={-0.3}>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
                       bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700
                       text-indigo-600 dark:text-indigo-400 font-medium"
          >
            <FaCogs className="text-lg" />
            <span>Çözümlerimiz</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6
                         text-gray-900 dark:text-white">
            Hizmetlerimiz
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            İşinizi dijitale taşımak için ihtiyacınız olan her şey. Modern teknolojiler ve yaratıcı çözümlerle yanınızdayız.
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-3xl
                         border border-gray-200 dark:border-gray-800
                         hover:border-indigo-500 dark:hover:border-indigo-400
                         transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20
                         hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="relative p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl
                               group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                 rounded-2xl blur"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3
                           group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                           transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             rounded-3xl pointer-events-none"></div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                             transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                     animation: 'shimmer 2s infinite'
                   }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Ekip Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TeamSection team={team} />
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

export default Services