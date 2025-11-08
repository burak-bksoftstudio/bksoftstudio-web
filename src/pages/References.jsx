// src/pages/References.jsx
import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

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
  const sliderRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || isDragging) return

    const scrollSpeed = 0.5 // pixels per frame
    let animationFrameId

    const autoScroll = () => {
      if (!isDragging && slider) {
        slider.scrollLeft += scrollSpeed

        // Reset to beginning when reaching the end (infinite loop effect)
        if (slider.scrollLeft >= slider.scrollWidth / 3 * 2) {
          slider.scrollLeft = slider.scrollWidth / 3
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isDragging])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
    sliderRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section
      id="references"
      className="relative min-h-screen py-20 sm:py-32 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Yorumlar Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
                       bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700
                       text-blue-600 dark:text-blue-400 font-medium"
          >
            <span className="text-lg">💬</span>
            <span>Müşteri Görüşleri</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6
                         text-gray-900 dark:text-white">
            Müşterilerimizin Yorumları
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projelerimizde çalıştığımız değerli müşterilerimizin görüşleri
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-3xl
                         border border-gray-200 dark:border-gray-700
                         hover:border-blue-500 dark:hover:border-blue-400
                         transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20
                         hover:-translate-y-1 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-5xl text-blue-500/10 dark:text-blue-400/10
                             group-hover:text-blue-500/20 dark:group-hover:text-blue-400/20
                             transition-colors duration-300">
                "
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-base leading-relaxed flex-1 relative z-10">
                "{ref.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-600
                               flex items-center justify-center text-white font-bold text-lg
                               group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {ref.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white
                               group-hover:text-blue-600 dark:group-hover:text-blue-400
                               transition-colors duration-300">
                    {ref.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{ref.title}</p>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* İş Birliklerimiz */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
                       bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700
                       text-teal-600 dark:text-teal-400 font-medium"
          >
            <span className="text-lg">🤝</span>
            <span>Partnerlerimiz</span>
          </motion.div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight
                         text-gray-900 dark:text-white">
            İş Birliklerimiz
          </h3>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden py-8 mb-8">
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-12 overflow-x-auto scrollbar-hide cursor-grab select-none active:cursor-grabbing px-4"
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % logos.length) * 0.1 }}
                className="group relative flex items-center justify-center h-32 w-56 rounded-2xl
                           bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           hover:border-teal-500 dark:hover:border-teal-400
                           shadow-md hover:shadow-2xl hover:shadow-teal-500/20
                           transition-all duration-300 hover:scale-105 flex-shrink-0
                           pointer-events-none"
              >
                <img
                  src={`/logos/${logo}`}
                  alt={logo}
                  draggable="false"
                  className={`object-contain transition-all duration-500 group-hover:scale-110 ${
                    logo === 'mimarliklogo.svg'
                      ? 'h-12 w-auto max-w-[120px]'
                      : 'h-24 w-auto max-w-[180px]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               rounded-2xl pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Edge Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          width: max-content;
          animation: scroll-slow 40s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default References