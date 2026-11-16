/* Kioku offline cache: try the network first (so deck updates show up), fall back to the
   last saved copy after 3 seconds or when offline. Bump CACHE to force a clean refresh. */
const CACHE = 'kioku-v4';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'decks/manifest.json',
  'icons/favicon.svg', 'icons/apple-touch-icon.png', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const net = fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  });
  e.waitUntil(net.catch(() => {}));
  e.respondWith((async () => {
    const cached = await caches.match(req, { ignoreSearch: true });
    const fallback = cached || (req.mode === 'navigate' ? await caches.match('index.html') : null);
    if (!fallback) return net;
    return Promise.race([net.catch(() => fallback), new Promise(r => setTimeout(() => r(fallback), 3000))]);
  })());
});
