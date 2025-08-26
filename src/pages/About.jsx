import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-6 md:px-20 flex flex-col items-center text-center bg-gray-900 text-white"
    >
      {/* Başlık */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <FaLightbulb className="text-yellow-400 text-3xl" />
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hakkımızda
        </h2>
      </div>

      {/* Harmanlanmış açıklama */}
      <div className="max-w-3xl text-lg leading-relaxed text-gray-300 space-y-6">
        <p>
          <strong>BK SoftStudio</strong>, Samsun merkezli bir yazılım ve medya
          stüdyosudur. 4 yıldır; bireysel ve ekip çalışmalarımızı genişleterek web tasarım, mobil uygulama, sosyal medya
          yönetimi ve şirkete özel yapay zeka destekli yazılım projeleri ile
          işletmelere yenilikçi dijital çözümler sunmak amacıyla <strong>BK SoftStudio</strong> çatısı altında çalışmalarımıza devam ediyoruz.
        </p>
        <p>
          Ekibimiz, her projede modern tasarım, yüksek performans ve yaratıcı
          yaklaşımlarla işletmenize değer katmayı hedefliyoruz.
        </p>
      </div>
    </motion.section>
  );
};

export default About;