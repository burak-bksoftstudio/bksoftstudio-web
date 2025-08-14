// src/components/TeamSection.jsx
import React from 'react'
import { motion } from 'framer-motion'

const TeamSection = ({ team }) => {
  return (
    <section className="py-24 px-6 md:px-24 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
        👥 Ekibimiz
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-gray-800 dark:text-white">
              {member.role}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {member.task}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection