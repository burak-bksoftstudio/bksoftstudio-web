// src/components/Home.jsx

import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1522199710521-72d69614c702"
      strength={400}
    >
      <div className="h-screen flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Burak Kırış
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "AI Specialist",
            1000,
            "React & Tailwind Enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.5rem", display: "inline-block" }}
          repeat={Infinity}
        />
        <p
          className="mt-6 max-w-xl text-center text-gray-200 px-4"
          data-aos="fade-up"
        >
          Web teknolojileri, yapay zeka ve kullanıcı dostu arayüzler üzerinde uzmanlaştım. Projelerime göz atmayı unutma!
        </p>
      </div>
    </Parallax>
  );
};

export default Home;