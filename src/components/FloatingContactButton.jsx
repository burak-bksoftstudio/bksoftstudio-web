import { motion } from "framer-motion";

export default function FloatingContactButton() {
  return (
    <motion.a
      href="mailto:contact@bksoftstudio.com?subject=Teklif%20ve%20İletişim&body=Merhaba%20BK%20SoftStudio%2C%0A%0AProjeme%20dair%20..."
      aria-label="E-posta ile iletişime geçin"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium
                 bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 shadow-lg
                 transition-colors"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      İletişime Geçin
    </motion.a>
  );
}