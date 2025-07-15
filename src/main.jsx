import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 🔥 AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// 🌌 Parallax Provider
import { ParallaxProvider } from 'react-scroll-parallax'

// ✅ Uygulama ilk açıldığında dark mode'u aktif et
document.documentElement.classList.add('dark')

// AOS'u başlat
AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)