const staticCacheName = 'review-cache-v3';
//this is all the urls to save in the cache
var urlsToCache = ['/', '/css/styles.css',
    '/img/1.jpg', '/img/2.jpg',
    '/img/3.jpg', '/img/4.jpg',
    '/img/5.jpg', '/img/6.jpg',
    '/img/7.jpg', '/img/8.jpg',
    '/img/9.jpg', '/img/10.jpg',
    '/index.html', '/restaurant.html',
    '/data/restaurants.json', '/main.js',
    '/js/dbhelper.js', '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png', 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png', 'https://leafletjs.com/reference-1.3.0.html#marker'


];
//open a cache whiile installing
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(urlsToCache);
        }).catch(function(e) { console.log("cache did not work: " + e) })
    )
});
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('review-') &&
                        cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

//return response from the cache, if there is an error then get the resuwst from the network
self.addEventListener('fetch', function(event) {
    caches.match(event.request).then(function(response) {
        if (response) return response;
        return fetch(event.request);
    });
});