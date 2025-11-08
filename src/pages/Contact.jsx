import { motion } from "framer-motion";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900
                 text-gray-900 dark:text-white
                 py-20 sm:py-32 px-4 sm:px-6 md:px-24 flex flex-col items-center justify-center
                 overflow-hidden transition-colors duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full
                     bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30
                     text-emerald-600 dark:text-emerald-400 font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm">Hızlı geri dönüş garantisi</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          Hadi{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
                         bg-clip-text text-transparent">
            Konuşalım
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Her türlü iş birliği, proje veya danışmanlık talepleriniz için bize
          ulaşmaktan çekinmeyin. Ekibimiz size en kısa sürede yanıt verecektir.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:contact@bksoftstudio.com?subject=İş%20Birliği%20%2F%20Teklif&body=Merhaba%2C%20..."
            className="group relative inline-flex items-center gap-3
                       px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg
                       overflow-hidden transition-all duration-300 hover:scale-105
                       shadow-2xl shadow-gray-900/20 dark:shadow-white/20 hover:shadow-gray-900/40 dark:hover:shadow-white/40"
          >
            <FiMail className="text-xl relative z-10" />
            <span className="relative z-10">E-Posta Gönder</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <a
            href="https://wa.me/905417617508"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3
                       px-8 py-4 bg-green-600 hover:bg-green-500 text-white
                       rounded-full font-semibold text-lg
                       transition-all duration-300 hover:scale-105
                       shadow-2xl shadow-green-600/30"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href="https://instagram.com/bksoftstudio"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-14 h-14
                       bg-gray-200/50 dark:bg-white/5 hover:bg-gray-300/50 dark:hover:bg-white/10
                       border border-gray-300 dark:border-white/10 hover:border-pink-500/50
                       rounded-2xl transition-all duration-300 hover:scale-110
                       hover:shadow-lg hover:shadow-pink-500/30"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-pink-500 transition-colors" />
          </a>

          <a
            href="mailto:info@bksoftstudio.com"
            className="group flex items-center justify-center w-14 h-14
                       bg-gray-200/50 dark:bg-white/5 hover:bg-gray-300/50 dark:hover:bg-white/10
                       border border-gray-300 dark:border-white/10 hover:border-indigo-500/50
                       rounded-2xl transition-all duration-300 hover:scale-110
                       hover:shadow-lg hover:shadow-indigo-500/30"
            aria-label="E-posta"
          >
            <FiMessageSquare className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-indigo-500 transition-colors" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-gray-300 dark:border-white/10"
        >
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} BK SoftStudio. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;