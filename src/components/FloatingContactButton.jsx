import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaComments, FaTimes } from "react-icons/fa";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "WhatsApp",
      href: "https://wa.me/905417617508",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "E-posta",
      href: "mailto:contact@bksoftstudio.com?subject=İş%20Birliği%20Talebi",
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50">
          {/* Contact Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2"
              >
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group flex items-center gap-3 px-5 py-3 rounded-2xl
                               bg-gradient-to-r ${option.color} ${option.hoverColor}
                               text-white font-semibold shadow-lg hover:shadow-xl
                               transition-all duration-300 hover:scale-105 whitespace-nowrap`}
                    whileHover={{ x: -5 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-sm sm:text-base">{option.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       hover:from-indigo-700 hover:to-purple-700
                       text-white shadow-2xl hover:shadow-indigo-500/50
                       flex items-center justify-center
                       transition-all duration-300 hover:scale-110
                       ${isOpen ? "rotate-90" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="İletişim seçenekleri"
          >
            {/* Pulse Animation */}
            {!isOpen && (
              <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-30" />
            )}

            {/* Icon */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FaTimes className="text-2xl sm:text-3xl" />
              ) : (
                <FaComments className="text-2xl sm:text-3xl" />
              )}
            </motion.div>
          </motion.button>

          {/* Tooltip */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm font-medium
                            rounded-xl shadow-lg whitespace-nowrap">
                İletişime Geçin
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
                              border-8 border-transparent border-l-gray-900 dark:border-l-gray-800" />
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}