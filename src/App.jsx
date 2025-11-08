import { lazy, Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import FloatingContactButton from "./components/FloatingContactButton";
import StickyNav from "./components/StickyNav";

// Lazy load pages for better performance
import Home from "./pages/Home"; // Keep Home eager for instant load
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const References = lazy(() => import("./pages/References"));
const Contact = lazy(() => import("./pages/Contact"));

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

export default function App() {
  return (
    <ParallaxProvider>
      {/* Sticky Navigation */}
      <StickyNav />

      {/* Main Content - Full Width */}
      <main className="relative w-full">
        <section id="home">
          <Home />
        </section>

        <Suspense fallback={<PageLoader />}>
          <section id="about">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<PageLoader />}>
          <section id="services">
            <Services />
          </section>
        </Suspense>

        <Suspense fallback={<PageLoader />}>
          <section id="references">
            <References />
          </section>
        </Suspense>

        <Suspense fallback={<PageLoader />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>

      <FloatingContactButton />
    </ParallaxProvider>
  );
}