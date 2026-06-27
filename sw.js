// Service Worker for AnatomIQ
// Handles offline functionality, caching, and PWA features

const CACHE_NAME = 'anatomiq-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache install error:', err);
      })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // For API calls, try network first then cache
  if (event.request.url.includes('/api') || 
      event.request.url.includes('firestore') ||
      event.request.url.includes('googleapis')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone and cache the response
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(event.request)
            .then(response => response || new Response('Offline - API not available', {
              status: 503,
              statusText: 'Service Unavailable'
            }));
        })
    );
  } else {
    // For static assets, try cache first then network
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Return cached version if available
          if (response) {
            return response;
          }
          
          // Otherwise fetch from network
          return fetch(event.request)
            .then(response => {
              // Don't cache if not a successful response
              if (!response || response.status !== 200 || response.type === 'error') {
                return response;
              }
              
              // Clone the response and cache it
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
              
              return response;
            })
            .catch(() => {
              // Network failed and not in cache
              // Return offline page or generic response
              return caches.match('/index.html')
                .then(response => response || new Response('Offline', {
                  status: 503,
                  statusText: 'Service Unavailable'
                }));
            });
        })
    );
  }
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('Service Worker registered and ready!');
