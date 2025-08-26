// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";

const TeamSection = ({ team }) => {
  return (
    <div className="text-center">
      {/* Başlık (Hizmetler başlığıyla hiyerarşi uyumlu) */}
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
        👥 Ekibimiz
      </h2>

      {/* Grid — Hizmetlerle birebir aynı kolon ve gap */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {member.role}
            </p>
            {member.task && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {member.task}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;