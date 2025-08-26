import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function MobileHeader() {
  return (
    <header
      className="
        lg:hidden sticky top-0 z-50
        bg-black/80 backdrop-blur
        border-b border-white/10
        text-white
      "
    >
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#home" className="block">
          <div className="text-lg font-extrabold tracking-tight leading-none">
            BK SoftStudio
          </div>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/bksoftstudio"
            target="_blank" rel="noreferrer"
            aria-label="Instagram (yeni sekme)"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/bksoftstudio"
            target="_blank" rel="noreferrer"
            aria-label="GitHub (yeni sekme)"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/bksoftstudio"
            target="_blank" rel="noreferrer"
            aria-label="LinkedIn (yeni sekme)"
            className="p-2 rounded-lg hover:bg-white/10"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}