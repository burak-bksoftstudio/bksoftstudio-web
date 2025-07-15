// src/pages/Home.jsx
import React from 'react'
import SplineRobot from '../components/SplineRobot'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white overflow-hidden"
    >
      {/* 🌟 Animasyonlu Başlık */}
      <h1 className="absolute top-20 text-6xl font-black text-indigo-600 dark:text-indigo-400 animate-pulse z-30">
        BK SoftStudio
      </h1>

      {/* 🧠 Spline Robot */}
      <div className="w-full max-h-[600px] z-10 mt-24">
        <SplineRobot />
      </div>

      {/* ✨ Tanıtım Metni */}
      <div className="relative z-20 text-center px-6 max-w-2xl -mt-8 sm:-mt-14 md:-mt-20">
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          BK SoftStudio; yapay zeka, frontend geliştirme, test otomasyonu ve yazılım mühendisliği
          alanlarında yenilikçi çözümler sunan bir yazılım stüdyosudur.
          <br />
          <br />
          Kurucusu <strong>Burak Kırış</strong> liderliğinde, modern kullanıcı deneyimleri ve yüksek
          performanslı sistemler inşa etmeye odaklanır.
        </p>
        <a
          href="#about"
          className="inline-block mt-8 px-6 py-3 border border-black dark:border-white text-sm font-semibold tracking-wider hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Daha Fazla
        </a>
      </div>
    </section>
  )
}

export default Home