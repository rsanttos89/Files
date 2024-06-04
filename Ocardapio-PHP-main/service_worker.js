const version = 'ocardapio-v8';

const resources = [
  '/',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll(resources);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== version;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'POST') {
    event.respondWith(
      caches.open(version).then(async function(cache) {
        const response = await cache.match(event.request);
        if (response) {
          return response;
        }
        const fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      })
    );
  } else {
    event.respondWith(
      fetch(event.request)
    );
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(function(error) {
      console.log('Erro ao registrar o Service Worker:', error);
    });
}