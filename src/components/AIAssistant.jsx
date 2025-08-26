import { useEffect, useMemo, useRef, useState } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

/**
 * Basit yerel “AI” sohbet:
 * - Anahtar kelime eşleştirme ile akıllı cevaplar
 * - LocalStorage'da konuşmayı tutar
 * - Mobilde de çalışır; UI köşede küçük
 * Sonra gerçek LLM'e bağlamak için sendMessage içinde API çağrısı eklemek yeterli.
 */

const KB = [
  {
    intent: "web",
    keywords: ["web", "site", "frontend", "react", "vite", "tailwind"],
    answer:
      "Web tarafında modern stack kullanıyoruz (React + Vite + Tailwind). Kurumsal web siteleri, landing page, SEO ve performans optimizasyonu dahil anahtar teslim çalışıyoruz."
  },
  {
    intent: "mobil",
    keywords: ["mobil", "android", "ios", "react native", "uygulama"],
    answer:
      "Mobil uygulama geliştirmede React Native tercih ediyoruz. iOS/Android için tek kod tabanı, App Store/Google Play yayın süreçleri dahil destek veriyoruz."
  },
  {
    intent: "otomasyon",
    keywords: ["otomasyon", "entegrasyon", "api", "bot"],
    answer:
      "İş süreçlerinizi hızlandırmak için API entegrasyonları, otomasyon botları ve webhook tabanlı çözümler üretiyoruz."
  },
  {
    intent: "3d",
    keywords: ["3d", "spline", "model", "render", "drone"],
    answer:
      "3D sahneler (Spline/Three.js), ürün modelleme ve drone çekimleri ile görsel anlatımı güçlendiriyoruz."
  },
  {
    intent: "fiyat",
    keywords: ["fiyat", "ücret", "teklif", "maliyet", "bütçe"],
    answer:
      "Proje kapsamına göre şeffaf teklif hazırlıyoruz. İhtiyacınızı kısaca anlatın, aynı gün ön teklif paylaşalım: burakkrss@gmail.com"
  },
];

const defaultGreeting =
  "Merhaba! Ben Burak AI Assistant. Nasıl yardımcı olabilirim? Örn: 'Mobil uygulama yapar mısın?'";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    const s = localStorage.getItem("bk_ai_chat");
    return s
      ? JSON.parse(s)
      : [{ role: "assistant", text: defaultGreeting, ts: Date.now() }];
  });
  const listRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("bk_ai_chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => listRef.current?.scrollTo(0, 999999), 50);
  }, [open, messages.length]);

  const answerLocal = useMemo(
    () => (q) => {
      const t = q.toLowerCase();
      for (const item of KB) {
        if (item.keywords.some((k) => t.includes(k))) return item.answer;
      }
      // default fallback
      return "Yardımcı olmak isterim. Kısaca ihtiyaçlarını anlatır mısın? Web, mobil, otomasyon, 3D/sosyal medya konularında çözüm sunuyoruz. Dilersen e‑posta ile detaylı konuşalım: burakkrss@gmail.com";
    },
    []
  );

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text, ts: Date.now() }]);

    // --- Burayı gerçek LLM'e bağlayabilirsin (OpenAI, etc.)
    // const res = await fetch("/api/chat", { ... })
    // const aiText = await res.text();
    const aiText = answerLocal(text);

    setMessages((m) => [...m, { role: "assistant", text: aiText, ts: Date.now() }]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Açma düğmesi */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-5 right-5 z-[80]
            inline-flex items-center gap-2
            rounded-2xl px-4 py-3
            bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg
          "
          aria-label="Burak AI Assistant'ı aç"
        >
          <FiMessageSquare className="text-xl" />
          <span className="hidden sm:inline">Soru Sor</span>
        </button>
      )}

      {/* Pencere */}
      {open && (
        <div
          className="
            fixed bottom-5 right-5 z-[90]
            w-[92vw] max-w-[380px] h-[60vh] max-h-[520px]
            rounded-2xl border border-white/15 bg-black/90 text-white
            backdrop-blur shadow-2xl flex flex-col
          "
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="font-semibold">Burak AI Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10"
              aria-label="Kapat"
            >
              <FiX />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "assistant"
                    ? "bg-white/10 border border-white/10"
                    : "bg-indigo-600"
                } ${m.role === "user" ? "ml-auto" : ""}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
                placeholder="Mesaj yazın…"
                className="flex-1 resize-none rounded-xl px-3 py-2 text-sm bg-white/10 border border-white/15 focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="inline-flex items-center justify-center rounded-xl p-3 bg-indigo-600 hover:bg-indigo-500"
                aria-label="Gönder"
              >
                <FiSend />
              </button>
            </div>
            <div className="mt-2 text-[10px] text-white/60">
              Öneri: “Mobil uygulama yapar mısın?” • “Fiyat nasıl belirleniyor?”
            </div>
          </div>
        </div>
      )}
    </>
  );
}