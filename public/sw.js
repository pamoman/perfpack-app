if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aqVhWivdM5uZQV4XcvDzH/_buildManifest.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/aqVhWivdM5uZQV4XcvDzH/_middlewareManifest.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/aqVhWivdM5uZQV4XcvDzH/_ssgManifest.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/919-1e92c961ec2bbbec.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/main-eda51b78afeb3672.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/pages/%5B%5B...path%5D%5D-1326cc0196f500f3.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/chunks/webpack-df4cf1c8d23aa877.js",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/_next/static/css/e3485df72325fda6.css",revision:"aqVhWivdM5uZQV4XcvDzH"},{url:"/android-chrome-192x192.png",revision:"7d0a7746603930ab894846c72e8cb9f6"},{url:"/android-chrome-512x512.png",revision:"f6c85d9dd64bc24d98483acac6b7c65f"},{url:"/apple-touch-icon.png",revision:"b981b62b70fde580d1019f6d8f8cc191"},{url:"/favicon-16x16.png",revision:"64daa220d506f5c324db6bd7c39aff36"},{url:"/favicon-32x32.png",revision:"e0fd102ada175323ec3f62e04650d2f4"},{url:"/favicon.ico",revision:"3a1bdaa7be2b882e7cf5d6c01d9480ec"},{url:"/icon-192x192.png",revision:"7d0a7746603930ab894846c72e8cb9f6"},{url:"/icon-512x512.png",revision:"f6c85d9dd64bc24d98483acac6b7c65f"},{url:"/logo.png",revision:"7b48a5f967cc00d709c561a3a03ca1e7"},{url:"/manifest.json",revision:"8c002269c21f187c2fcc4989b0cb2f70"},{url:"/mstile-150x150.png",revision:"5ab7b2c6009e62faae9b54c2c7e57be1"},{url:"/pdf.worker.min.js",revision:"7da3c49743b88cafe1d66e4468e1a91f"},{url:"/safari-pinned-tab.svg",revision:"e1854d5bab2476426bef877f4372f680"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
