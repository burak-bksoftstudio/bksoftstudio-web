import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 🔥 AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

// 🌌 Parallax Provider
import { ParallaxProvider } from "react-scroll-parallax";

// ✅ Dark mode initialization - Check user preference
const initDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

initDarkMode();

// AOS başlat
AOS.init({
  duration: 600,
  easing: "ease-out-cubic",
  once: true, // her öğe 1 defa animasyon yapsın
});

// React render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

// 🚀 PWA Service Worker kaydı
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        console.log("Service Worker kayıt başarılı ✅");
      })
      .catch((err) => {
        console.warn("Service Worker kaydı başarısız:", err);
      });
  });
}