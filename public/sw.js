if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9fe6d9532222a414701a1e0a03143443"},{url:"/_next/static/KlkpLkY4ARaA7lxUvztaz/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/KlkpLkY4ARaA7lxUvztaz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/238-5459c4cd26c8f59b.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/291-adf546c1b6085cee.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/463-b9828365c578c22b.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/59-cf33c743ff835757.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/630-a358197dcfd7fd88.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/69-360e41c837788506.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/765-2a4262b50b12f562.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/875-c1282b31935ea459.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/app/_not-found-9e7c28ece4d20e3a.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/app/dashboard/layout-4c85c16a2df788ca.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/app/dashboard/page-33881cb4adfe8295.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/app/layout-4474fe37dd5c7bc9.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/app/page-25a918b1b3da6b5a.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/fd9d1056-4dfad3706ff5b4f5.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/main-a59f9f0168bee93b.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/main-app-8a7c6ab10b5d61f6.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-add8d238a904bf7e.js",revision:"KlkpLkY4ARaA7lxUvztaz"},{url:"/_next/static/css/5678b60406d6441f.css",revision:"5678b60406d6441f"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/manifest.json",revision:"e1135c8767f01a8d48c8fcdc9d45a2b7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
