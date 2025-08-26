const CACHE = "bksoftstudio-v1";
const ASSETS = [
  "/", "/index.html", "/manifest.webmanifest"
  // Vite derlemesi dinamik; yine de shell dosyaları gezinmede offline’a yardım eder
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k))))
    ).then(() => self.clients.claim())
  );
});

// Navigasyon isteklerinde network-first, statiklerde cache-first
self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("/index.html"))
    );
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const resClone = res.clone();
        caches.open(CACHE).then((c) => c.put(req, resClone));
        return res;
      }))
    );
  }
});