import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      /* FULL-BLEED: Sol yan bardan SAĞ kenara kadar tüm yatayı kapla */
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        bg-black text-white
        py-16 px-6 md:px-24
        flex flex-col items-center justify-center space-y-10
      "
    >
      {/* İçerik gövdesi */}
      <motion.div
        className="
          mx-auto max-w-5xl
          text-center
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Başlık rozeti */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm tracking-wide text-white/80">
            Hızlı geri dönüş garantisi
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          İletişime Geçin
        </h2>

        <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          Her türlü iş birliği, proje veya danışmanlık talepleriniz için bize
          ulaşmaktan çekinmeyin.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="mailto:contact@bksoftstudio.com?subject=İş%20Birliği%20%2F%20Teklif&body=Merhaba%2C%20..."
            className="
              inline-flex items-center gap-3
              rounded-2xl px-6 py-3
              font-medium
              bg-white text-black hover:bg-gray-200
              border border-white/10
              shadow-lg shadow-black/30
              transition
            "
            aria-label="E-posta ile iletişime geç"
          >
            <FiMail className="text-xl" />
            E‑Posta Gönder
          </a>
        </div>

        {/* Alt bilgi */}
        <div className="mt-10 text-center text-gray-400 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Burak Kırış. Tüm hakları saklıdır.</p>
         {/*  <div className="flex justify-center gap-6">
            <a
              href="https://github.com/burakkiris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub profili (yeni sekme)"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/burakkiris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn profili (yeni sekme)"
            >
              LinkedIn
            </a>
          </div>*/}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;