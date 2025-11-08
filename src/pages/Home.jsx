import { motion } from "framer-motion";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { ParallaxSection } from "../components/AppleParallax";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen
                 bg-gradient-to-b from-gray-50 via-white to-gray-50
                 dark:from-gray-900 dark:via-black dark:to-gray-900
                 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      <ScrollProgressBar />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxSection speed={0.5}>
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection speed={-0.4}>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        </ParallaxSection>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-6xl mx-auto py-20 pt-24 sm:pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700
                     text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Dijital Dönüşümde Yanınızdayız
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8
                     bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900
                     dark:from-white dark:via-indigo-400 dark:to-white
                     bg-clip-text text-transparent leading-tight"
        >
          BK SoftStudio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400
                     max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Yazılım, web tasarım, sosyal medya yönetimi, video prodüksiyon ve
          <span className="text-indigo-600 dark:text-indigo-400 font-medium"> yapay zeka destekli çözümlerle işinizi dijitale taşıyoruz</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black
                       rounded-full font-semibold text-lg overflow-hidden
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Hemen Başlayın</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700
                       text-gray-900 dark:text-white rounded-full font-semibold text-lg
                       transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400
                       hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:scale-105"
          >
            Hizmetlerimiz
          </a>
        </motion.div>

        {/* Stats or Features - Optional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 w-full max-w-4xl"
        >
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">4+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Yıllık Deneyim</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">30+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tamamlanan Proje</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Müşteri Memnuniyeti</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;