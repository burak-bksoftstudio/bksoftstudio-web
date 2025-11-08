// src/components/TeamSection.jsx
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const TeamSection = ({ team }) => {
  return (
    <div className="text-center">
      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
                     bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700
                     text-purple-600 dark:text-purple-400 font-medium"
        >
          <FaUsers className="text-lg" />
          <span>Takım</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4
                       text-gray-900 dark:text-white">
          Ekibimiz
        </h2>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Alanında uzman, tutkulu ve yaratıcı ekip üyelerimizle projelerinizi hayata geçiriyoruz.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl
                       border border-gray-200 dark:border-gray-800
                       hover:border-purple-500 dark:hover:border-purple-400
                       transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20
                       hover:-translate-y-1 text-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Avatar Placeholder */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full
                           bg-gradient-to-br from-purple-400 to-indigo-600
                           flex items-center justify-center text-white font-bold text-xl
                           group-hover:scale-110 transition-transform duration-300
                           shadow-lg">
              {member.name.charAt(0)}
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1
                         group-hover:text-purple-600 dark:group-hover:text-purple-400
                         transition-colors duration-300">
              {member.name}
            </h3>

            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
              {member.role}
            </p>

            {member.task && (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.task}
              </p>
            )}

            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           rounded-2xl pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;