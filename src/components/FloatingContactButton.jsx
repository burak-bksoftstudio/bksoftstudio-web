import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const FloatingContactButton = () => {
  return (
    <motion.a
      href="contact@bksoftstudio.com" // Burayı ister mailto:mail@adres.com yapabilirsin
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }} // Yukarı aşağı yumuşak hareket
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white 
                 flex items-center gap-2 px-4 py-2 rounded-full 
                 shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform"
    >
      <FiMail className="text-xl" />
      <span className="font-semibold text-sm">İletişime Geçin</span>
    </motion.a>
  );
};

export default FloatingContactButton;