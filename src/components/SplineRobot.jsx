import React from 'react'

const SplineRobot = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-xl">
      {/* 🧠 Spline 3D Sahne */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-bR1FoYANVFYBxQCGzBsYHly1/"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
        title="Spline Robot"
        className="w-full h-full"
      />

      {/* 🔹 Logo */}
      <div className="absolute bottom-2 right-2 z-20 flex items-center justify-center pointer-events-none">
        <img
          src="/logos/bksoft-logo.png"
          alt="BK SoftStudio"
          className="h-[48px] w-[200px] object-contain drop-shadow-lg"
        />
      </div>

      {/* 🔹 Arkadaki watermark’ı kapatan dolu kutu */}
      <div className="absolute bottom-2 right-2 w-[200px] h-[48px] bg-black dark:bg-black rounded-sm z-10 pointer-events-none"></div>
    </div>
  )
}

export default SplineRobot