self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('space-pwa-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/pwa.html',
        '/pwa.css',
        '/pwa.js',
        '/pwa.json',
        '/landing.jpg',
        'NASA_Mars_Rover.jpg',
        '/spaceStation.webp',
        '/spaceStationsound.mp3',
        '/rover.mp3',
        '/landing.mp3',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
