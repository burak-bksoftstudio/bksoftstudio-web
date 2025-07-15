import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import ScrollIndicator from './components/ScrollIndicator'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'

// Sayfalar
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

import Projects from './pages/Projects'
import References from './pages/References'
import Contact from './pages/Contact'

const App = () => {
  return (
    <ParallaxProvider>
      <div className="flex">
        {/* Sol sabit menü */}
        <NavMenu />

        {/* Ana içerik */}
        <main className="ml-[5rem] sm:ml-[6rem] w-full relative overflow-x-hidden">
          {/* Sayfa içi scroll göstergesi */}
          <ScrollIndicator />

          {/* Sayfalar */}
          <Home />
          <About />
          <Services />

          <Projects />
          <References />
          <Contact />

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </ParallaxProvider>
  )
}

export default App