import React from "react";

const SplineRobot = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
      {/* Yükseklik orantısı */}
      <div className="relative h-[58vw] max-h-[720px] min-h-[420px] overflow-hidden">
        {/* İFRAME'İ GENİŞLET → KENARLARDAN TAŞIR, KIRP */}
        <div className="absolute inset-0 h-full
                        w-[118%] -left-[9%]
                        md:w-[130%] md:-left-[15%]
                        lg:w-[145%] lg:-left-[22.5%]">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-bR1FoYANVFYBxQCGzBsYHly1/"
            title="Spline Robot"
            allow="autoplay; fullscreen"
            className="w-full h-full block"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* Watermark'i kapatmak için logolu plaka (üstte) */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
        <img
          src="/logos/bksoft-logo.png"
          alt="BK SoftStudio"
          className="h-[42px] w-[180px] object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute bottom-4 right-4 w-[180px] h-[42px] bg-black rounded-sm z-10 pointer-events-none" />
    </div>
  );
};

export default SplineRobot;