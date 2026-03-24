// const CACHE_NAME = "marvinjamb-cbt-v1";

// const urlsToCache = [
//   "/",
//   "/index.html",
//   "/icon.png"
// ];

// // Install → cache files
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Caching files...");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Activate → clean old cache
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             console.log("Deleting old cache:", cache);
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// // Fetch → serve from cache if offline
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });