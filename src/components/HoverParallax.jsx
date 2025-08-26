import { useEffect, useRef } from "react";

/**
 * Çocuğu (children) fare hareketine çok hafif tepki verecek şekilde paralakslar.
 * Mobil/touch cihazlarda otomatik pasif.
 */
export default function HoverParallax({ children, strength = 10, className = "" }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      target.current.x = Math.max(-1, Math.min(1, dx)) * strength;
      target.current.y = Math.max(-1, Math.min(1, dy)) * strength;
    };

    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      raf.current = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [strength]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}