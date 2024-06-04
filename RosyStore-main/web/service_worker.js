const version = 'rosystore-v15.12.23'; // Atualize a versão sempre que houver alterações nos recursos

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(function(error) {
      console.log('Erro ao registrar o Service Worker:', error);
    });
}

const resources = [
  '/',
  '/index.php',
  '/404.php',

  '/cart/checkout.php',
  '/chat/helpdesk.php',

  '/products/detail.php',
  '/products/favorite.php',
  '/products/serach.php',

  '/public/assets/icons-pwa/logo192.png',
  '/public/assets/icons-pwa/logo512.png',

  '/public/styles/cart.css',
  '/public/styles/detail.css',
  '/public/styles/favorite.css',
  '/public/styles/global.css',
  '/public/styles/helpdesk.css',
  '/public/styles/home.css',
  '/public/styles/search.css',
  '/public/styles/users.css',
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
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        const responseClone = response.clone();

        caches.open(version).then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(function() {
        return caches.match(event.request).then(function(cachedResponse) {
          if (cachedResponse) {
            return cachedResponse;
          } else {
            return new Response('Offline', { status: 500, statusText: 'Offline' });
          }
        });
      })
  );
});
