import React from 'react'
import SplineRobot from '../components/SplineRobot'

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start min-h-screen
                 bg-white text-black dark:bg-gray-900 dark:text-white overflow-hidden"
    >
      {/* 🌟 Animasyonlu Başlık */}
      <h1 className="mt-16 text-6xl font-black
                     text-indigo-600 dark:text-indigo-400
                     animate-pulse z-30 text-center">
        BK SoftStudio
      </h1>

      {/* 🧠 Spline Robot */}
      <div className="w-full max-h-[600px] z-10 mt-8">
        <SplineRobot />
      </div>

      {/* ✨ Tanıtım Metni */}
      <div className="relative z-20 text-center px-6 max-w-2xl mt-6">
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          BK SoftStudio, mobil uygulama, web sitesi, sosyal medya yönetimi ve
          video & drone çekimi alanlarında yenilikçi dijital çözümler sunan bir
          yazılım stüdyosudur.
        </p>
      </div>
    </section>
  )
}

export default Home