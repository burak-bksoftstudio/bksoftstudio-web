import { useEffect, useRef } from "react";

/** Ekranın üstünde, scroll ilerledikçe genişleyen ince bar */
export default function ScrollProgressBar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const p = Math.min(1, window.scrollY / max);
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-transparent"
    >
      <div
        ref={ref}
        className="origin-left h-full w-full
                   bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400
                   transition-transform duration-75 ease-linear"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}