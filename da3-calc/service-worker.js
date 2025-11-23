const CACHE_NAME = 'da3-exp-calculator-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// インストール時キャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// オフライン時キャッシュから取得
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
