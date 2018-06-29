//this is all the urls to save in the cache
var urlsToCache = ['/Restaurant-Reviews-App-Stage-1/', '/Restaurant-Reviews-App-Stage-1/css/styles.css',
    '/Restaurant-Reviews-App-Stage-1/img/1.jpg', '/Restaurant-Reviews-App-Stage-1/img/2.jpg',
    '/Restaurant-Reviews-App-Stage-1/img/3.jpg', '/Restaurant-Reviews-App-Stage-1/img/4.jpg',
    '/Restaurant-Reviews-App-Stage-1/img/5.jpg', '/Restaurant-Reviews-App-Stage-1/img/6.jpg',
    '/Restaurant-Reviews-App-Stage-1/img/7.jpg', '/Restaurant-Reviews-App-Stage-1/img/8.jpg',
    '/Restaurant-Reviews-App-Stage-1/img/9.jpg', '/Restaurant-Reviews-App-Stage-1/img/10.jpg',
    '/Restaurant-Reviews-App-Stage-1/index.html', '/Restaurant-Reviews-App-Stage-1/restaurant.html',
    '/Restaurant-Reviews-App-Stage-1/data/restaurants.json', '/Restaurant-Reviews-App-Stage-1/js/main.js',
    '/Restaurant-Reviews-App-Stage-1/js/dbhelper.js', '/Restaurant-Reviews-App-Stage-1/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png', 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'


]; //
//open a cache whiile installing
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v2').then(function(cache) {
            return cache.addAll(urlsToCache);
        }).catch(function(e) { console.log("cach did not work: " + e) })
    )
});
//return response from the cache, if there is an error then get the resuwst from the network
self.addEventListener('fetch', function(event) {
    caches.match(event.request).then(function(response) {
        if (response) return response;
        return fetch(event.request);
    });
});