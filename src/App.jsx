import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import NavMenu from "./components/NavMenu";
import MobileHeader from "./components/MobileHeader"; // sade sürüm (butonsuz)
import FloatingContactButton from "./components/FloatingContactButton";

// import AIAssistant from "./components/AIAssistant";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import Projects from "./pages/Projects";
import References from "./pages/References";
import Contact from "./pages/Contact";

export default function App() {
  // Otomatik scroll zinciri:
  // 1) 3s sonra #about
  // 2) #about'a indikten 5s sonra #services
  useEffect(() => {
    const hasHash = typeof window !== "undefined" && window.location.hash;
    if (hasHash) return;

    let userScrolled = false;
    let toAboutTimer = 0;
    let toServicesTimer = 0;

    // Programatik kaydırmaları kullanıcı hareketinden ayırmak için bayrak
    let isAutoScrolling = false;
    let autoScrollClearTimer = 0;

    const onScroll = () => {
      // Programatik scroll sırasında gelen olayları yok say
      if (isAutoScrolling) return;

      if (window.scrollY > 40) {
        userScrolled = true;
        clearTimeout(toAboutTimer);
        clearTimeout(toServicesTimer);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const goTo = (id) => {
      const el = document.getElementById(id);
      if (!el) return false;

      // Programatik scroll başlıyor → bayrağı aç
      isAutoScrolling = true;
      // ~1s sonra bayrağı kapat (smooth scroll süresi kadar)
      clearTimeout(autoScrollClearTimer);
      autoScrollClearTimer = window.setTimeout(() => {
        isAutoScrolling = false;
      }, 1100);

      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      return true;
    };

    // 1) 3 sn sonra ABOUT
    toAboutTimer = window.setTimeout(() => {
      if (userScrolled) return;
      const ok = goTo("about");
      if (!ok) return;

      // 2) 5 sn sonra SERVICES (kullanıcı o arada scroll ederse iptal)
      toServicesTimer = window.setTimeout(() => {
        if (userScrolled) return;
        goTo("services");
      }, 5000);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(toAboutTimer);
      clearTimeout(toServicesTimer);
      clearTimeout(autoScrollClearTimer);
    };
  }, []);

  return (
    <ParallaxProvider>
      <NavMenu />
      <MobileHeader />

      {/* MASAÜSTÜ: yan bar kadar padding + tam genişlik.
          MOBİL: mevcut düzeni etkilemez. */}
      <main className="relative w-full lg:pl-36 px-4 lg:px-10">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        {/* <section id="projects"><Projects /></section> */}
        <section id="references"><References /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* <AIAssistant /> */}

      <FloatingContactButton />
    </ParallaxProvider>
  );
}