self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open('resto-app-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/js/restaurant_info.js',
                '/js/main.js',
                '/js/dbhelper.js',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
            ]);

        }).catch(function(err) {
            console.log(err, 'something went wrong?')
        })
    );
});

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             if (response) {
//                 console.log(event.request, 'is in the cache!')
//                 return response;
//             }
//             else {
//                 console.log('oops something went wrong')
//                 return fetch(event.request)
//                 .then(function(response) {
//                     caches.open('resto-app-v1').then(function(cache) {
//                         cache.put(event.request, response)
//                     })
//                     return response;
//                 })
//                 .catch(function(err) {
//                     console.log(err);
//                 });
//             };
//         })
//     );
// });