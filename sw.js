if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-86d6cfa2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/avatar.jpg",revision:"6821a9c6b604f42e5d9fee95763a8191"},{url:"assets/images/mainBackground.jpg",revision:"00350abb834398eaffe3c89d5cf97aea"},{url:"assets/images/og-image.png",revision:"f0c0244544be49abbb769c506e8b7510"},{url:"index.html",revision:"c420749d9c77b0d2d25528fac89c37b7"},{url:"style.css",revision:"fa3742357eb52321b05e1ca66c694546"}],{})}));
//# sourceMappingURL=sw.js.map