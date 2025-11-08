import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function NavMenu() {
  return (
    <aside
      className="
        hidden lg:flex
        fixed left-0 top-0 h-screen w-44
        z-40 flex-col justify-between
        bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/80
        border-r border-white/10
        px-4 py-6
      "
    >
      {/* ÜST: Logo (büyütülmüş) */}
      <div className="flex justify-center">
        <a
          href="#home"
          className="block select-none group transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/logos/bklogo.png"
            alt="BK SoftStudio Logo"
            className="w-36 h-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        </a>
      </div>

      {/* ORTA: Slogan (dikey) */}
      <div className="flex-1 flex items-center justify-center">
        <span
          className="
            text-white/70 hover:text-white transition-all duration-500
            [writing-mode:vertical-rl] rotate-180 select-none
            text-[14px] font-bold tracking-[0.45em] uppercase
            relative
            hover:tracking-[0.5em]
            group
          "
          title="Slogan"
        >
          <span className="relative z-10">
            Dijital,&nbsp;Hızlı,&nbsp;Modern&nbsp;Çözümler
          </span>
          <span className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/10 to-indigo-500/0
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
        </span>
      </div>

      {/* ALT: Sosyal ikonlar (Instagram, Mail, WhatsApp) */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          {/* Instagram */}
          <a
            href="https://instagram.com/bksoftstudio"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="group p-2 rounded-xl hover:bg-gradient-to-br from-purple-500/20 to-pink-500/20
                       border border-white/0 hover:border-pink-500/50
                       transition-all duration-300 hover:scale-110
                       hover:shadow-lg hover:shadow-pink-500/30"
            title="Instagram"
          >
            <FaInstagram className="text-lg text-white/70 group-hover:text-pink-500 transition-colors duration-300" />
          </a>

          {/* E-posta */}
          <a
            href="mailto:info@bksoftstudio.com"
            aria-label="E-posta"
            className="group p-2 rounded-xl hover:bg-gradient-to-br from-indigo-500/20 to-blue-500/20
                       border border-white/0 hover:border-indigo-500/50
                       transition-all duration-300 hover:scale-110
                       hover:shadow-lg hover:shadow-indigo-500/30"
            title="E-posta"
          >
            <FaEnvelope className="text-lg text-white/70 group-hover:text-indigo-400 transition-colors duration-300" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/905417617508"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="group p-2 rounded-xl hover:bg-gradient-to-br from-green-500/20 to-emerald-500/20
                       border border-white/0 hover:border-green-500/50
                       transition-all duration-300 hover:scale-110
                       hover:shadow-lg hover:shadow-green-500/30"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-lg text-white/70 group-hover:text-green-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </aside>
  );
}