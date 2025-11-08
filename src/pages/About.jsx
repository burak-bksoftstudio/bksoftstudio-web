import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";
import { ParallaxSection, FadeInSection } from "../components/AppleParallax";

const About = () => {
  const features = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "4 Yıllık Deneyim",
      description: "Sektörde kazandığımız derin uzmanlık ve tecrübe"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Uzman Ekip",
      description: "Alanında profesyonel, tutkulu ve yaratıcı kadro"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Yenilikçi Çözümler",
      description: "Modern teknolojilerle geleceğe hazır projeler"
    }
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxSection speed={0.3}>
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        </ParallaxSection>
        <ParallaxSection speed={-0.2}>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        </ParallaxSection>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
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
            className="inline-flex items-center justify-center w-16 h-16 mb-6
                       bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl
                       shadow-lg shadow-yellow-500/50"
          >
            <FaLightbulb className="text-white text-2xl" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6
                         text-gray-900 dark:text-white">
            Hakkımızda
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 md:p-16
                          border border-gray-200 dark:border-gray-700 shadow-2xl">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-center">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">BK SoftStudio</span>,
              Samsun merkezli bir yazılım ve medya stüdyosudur.
              <span className="font-semibold"> 4 yıldır</span> bireysel ve ekip çalışmalarımızı genişleterek
              web tasarım, mobil uygulama, sosyal medya yönetimi ve
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> şirkete özel yapay zeka destekli</span> yazılım
              projeleri ile işletmelere yenilikçi dijital çözümler sunmak amacıyla
              <span className="font-bold"> BK SoftStudio</span> çatısı altında çalışmalarımıza devam ediyoruz.
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 text-center">
              Ekibimiz, her projede modern tasarım, yüksek performans ve yaratıcı
              yaklaşımlarla işletmenize değer katmayı hedefliyoruz.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8
                         border border-gray-200 dark:border-gray-700
                         hover:border-indigo-500 dark:hover:border-indigo-400
                         transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20
                         hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-indigo-600 dark:text-indigo-400
                               group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;