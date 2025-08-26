import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function NavMenu() {
  return (
    <aside
      className="
        hidden lg:flex
        fixed left-0 top-0 h-screen w-44
        z-40 flex-col justify-between
        bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/75
        border-r border-white/10
        px-4 py-6
      "
    >
      {/* ÜST: Logo (büyütülmüş) */}
      <div className="flex justify-center">
        <a href="#home" className="block select-none">
          <img
            src="/logos/bklogo.png"
            alt="BK SoftStudio Logo"
            className="w-36 h-auto object-contain"
          />
        </a>
      </div>

      {/* ORTA: Slogan (dikey) */}
      <div className="flex-1 flex items-center justify-center">
        <span
          className="
            text-white/85 hover:text-white transition-colors
            [writing-mode:vertical-rl] rotate-180 select-none
            text-[14px] font-bold tracking-[0.45em] uppercase
          "
          title="Slogan"
        >
          Dijital,&nbsp;Hızlı,&nbsp;Modern&nbsp;Çözümler
        </span>
      </div>

      {/* ALT: Sosyal ikonlar (Instagram, Mail, WhatsApp) */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/bksoftstudio"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="p-1.5 rounded-lg hover:bg-white/10"
            title="Instagram"
          >
            <FaInstagram className="text-lg" />
          </a>

          {/* E-posta */}
          <a
            href="mailto:info@bksoftstudio.com"
            aria-label="E-posta"
            className="p-1.5 rounded-lg hover:bg-white/10"
            title="E-posta"
          >
            <FaEnvelope className="text-lg" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/905417617508"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-1.5 rounded-lg hover:bg-white/10"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>
      </div>
    </aside>
  );
}