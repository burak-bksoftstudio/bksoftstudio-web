import React from 'react'

const SplineRobot = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-xl">
      {/* 🟣 Üstte Ortalanmış Marka İsmi */}
      <div className="absolute top-8 w-full flex justify-center z-20 pointer-events-none">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 drop-shadow-md">
        </h1>
      </div>

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

      {/* 🔒 Gizleyici Blur Overlay */}
      <div
        className="absolute bottom-2 right-2 bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-md px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 pointer-events-none"
        style={{ zIndex: 10 }}
      ></div>
    </div>
  )
}

export default SplineRobot