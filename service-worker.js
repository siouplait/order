"use strict";var precacheConfig=[["/order/index.html","247963efb00cf16b894d9538e2d26dea"],["/order/static/css/main.e9d6a0bf.css","ebba1285600d2bd0bca5b4b41bb1a73d"],["/order/static/js/main.6650b483.js","ef46e84260a6b98dda21501651fb437a"],["/order/static/media/Down_arrow_icon.5da1b977.svg","5da1b9778092864b43e4a1fca4b7711d"],["/order/static/media/btn_adding.10877736.svg","10877736ffdeaab9775a033d39225b90"],["/order/static/media/btn_back.d8071eb4.svg","d8071eb44a0eba0b130eae4b687c3f69"],["/order/static/media/btn_burger.8d58f2b5.svg","8d58f2b5469588d47a7149430241d4d4"],["/order/static/media/btn_remove.c36e7fc8.svg","c36e7fc8491ca4d33f6d6681a9490b3d"],["/order/static/media/btn_search.b43c3e6d.svg","b43c3e6d723a24f2d3645ecbf430fadf"],["/order/static/media/file.3e809665.woff","3e8096656f10a524e6ab8a1c287c5afa"],["/order/static/media/logo_heart.dfedea3d.svg","dfedea3d43d53247d5adc505df15f5af"],["/order/static/media/logo_main.8ac1b45e.png","8ac1b45e4ee03212e02c637f7e6d9c8b"],["/order/static/media/logo_nfcn.9b7c4f3d.png","9b7c4f3d8cc92339955129ce6b363530"],["/order/static/media/logo_qr.b58dca91.png","b58dca9141d9d2b30d481765558877cc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/order/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});