self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
  e.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.css',
        '/contact.html',
        '/images/jpps_logo.jpg',
        '/resources.html',
        '/create.html',
        '/about.html',
        '/gallery.html'        
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
