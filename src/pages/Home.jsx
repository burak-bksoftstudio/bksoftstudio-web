import React from "react";
import SplineRobot from "../components/SplineRobot";
import ScrollProgressBar from "../components/ScrollProgressBar"; // üstte ince progress bar
import HoverParallax from "../components/HoverParallax";         // robot için hafif paralaks

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start min-h-screen
                 bg-white text-black dark:bg-gray-900 dark:text-white overflow-hidden"
    >
      {/* Üstte scroll ilerleme barı (sabit) */}
      <ScrollProgressBar />

      {/* Başlık */}
      <h1
        className="mt-16 text-6xl font-black
                   text-indigo-600 dark:text-indigo-400
                   z-30 text-center"
      >
        BK SoftStudio
      </h1>

      {/* Robot alanı: hafif paralaks */}
      <HoverParallax strength={10} className="w-full max-h-[600px] z-10 mt-8">
        <SplineRobot />
      </HoverParallax>
    </section>
  );
};

export default Home;