/* Service worker — enables home-screen install and offline viewing.
   Strategy: network-first, falling back to cache. The freshest tool.html is
   always served when online; the cached shell only kicks in offline. */
const CACHE = 'ct-compare-shell-v9';
const SHELL = [
  './tool.html',
  './manifest.webmanifest',
  './assets/logos/cartrack-insurance-horizontal-white.png',
  './assets/logos/cartrack-insurance-mark.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) =>
    Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Keep the offline copy fresh
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
