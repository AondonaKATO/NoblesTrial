const CACHE_NAME = 'clock-app-v1';
const CACHE_ASSETS = [
  './',             // Cache root path for `index.html`
  './index.html',   // Cache HTML
  './style.css',    // Cache CSS
  './script.js',    // Cache JS
];

// Install Service Worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching app assets...');
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercept fetch requests and serve cached files if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
