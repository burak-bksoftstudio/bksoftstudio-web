import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 🔥 AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS'u başlat
AOS.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)