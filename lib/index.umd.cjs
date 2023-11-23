(function(a,d){typeof exports=="object"&&typeof module<"u"?module.exports=d():typeof define=="function"&&define.amd?define(d):(a=typeof globalThis<"u"?globalThis:a||self,a.RippleLite=d())})(this,function(){"use strict";const a=`.ripple-wrap {\r
    position: relative;\r
    overflow: hidden;\r
}\r
\r
.ripple-div {\r
    pointer-events: none;\r
    position: absolute;\r
    left: 0;\r
    top: 0;\r
    width: 5px;\r
    height: 5px;\r
    border-radius: 50%;\r
    transform: translate(-50%, -50%);\r
    -webkit-transform: translate(-50%, -50%);\r
}\r
\r
.ripple-div.touchstart {\r
    background: blue;\r
    transition-property: width, height, background-color;\r
    transition-duration: 1.5s;\r
    transition-timing-function: ease-in;\r
    /* opacity: 0; */\r
    background-color: transparent;\r
}\r
\r
.ripple-div.touchend {\r
    transition-property: width, height, background-color;\r
    transition-duration: 1s;\r
    transition-timing-function: ease-out;\r
    background-color: transparent !important;\r
}\r
`;function d(){const e=/Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/i,u=navigator.userAgent;return e.test(u)}function L(e,u=50){var l=!0;return function(...s){l&&(e(...s),l=!1,setTimeout(function(){l=!0},u))}}const v=d(),E={mounted(e){const u=()=>{if(document.querySelector("#ripple-style"))return;const t=document.createElement("style");t.setAttribute("id","ripple-style"),t.type="text/css",document.head.appendChild(t),t.innerHTML=a},l=t=>{const r=document.createElement("div");r.classList.add("contentbox");var i=getComputedStyle(t,null),o={position:"absolute",left:i.paddingLeft,right:i.paddingRight,top:i.paddingTop,bottom:i.paddingBottom};return Object.assign(r.style,o),console.log("🚀 ~ file: index.ts:41 ~ appendRippleWrap ~ style:",o),t.appendChild(r),t.rippleWrap=r,r};u();var s=e;e.dataset.range==="content-box"&&(e.style.position="relative",s=l(e)),s.classList.add("ripple-wrap");var n=document.createElement("div");n.classList.add("ripple-div"),s.appendChild(n);var c=!0,f=!0;function x(t){var r=getComputedStyle(t,null),i=parseInt(r.width),o=parseInt(r.height),C=Math.sqrt(Math.pow(i,2)+Math.pow(o,2))*2.5,b=e.dataset.size;n.style.width=n.style.height=(b?parseInt(b):C)+"px";var y=e.dataset.background;y&&(n.style.backgroundColor=y)}function g(t){n.style.width=n.style.height="5px";var r=e.dataset.background;r&&(n.style.backgroundColor="transparent")}function T(t){v?(t.addEventListener("touchstart",p,!1),t.addEventListener("touchend",h,!1)):(t.addEventListener("mousedown",p,!1),t.addEventListener("mouseup",h,!1)),n.addEventListener("transitionend",m,!1)}function k(){v?(e.removeEventListener("touchstart",p,!1),e.removeEventListener("touchend",h,!1)):(e.removeEventListener("mousedown",p,!1),e.removeEventListener("mouseup",h,!1)),n.removeEventListener("transitionend",m,!1)}function p(t){if(!c)return;f=c=!1;var r=t.changedTouches?t.changedTouches[0]:t;const i=t.target;var o=i.getBoundingClientRect();n.style.left=r.clientX-o.left+"px",n.style.top=r.clientY-o.top+"px",n.classList.add("touchstart"),n.classList.remove("touchend"),x(i)}function h(t){c=!0,f=!0,n.classList.add("touchend"),setTimeout(()=>{n.classList.remove("touchstart"),n.classList.remove("touchend"),t.target,g()},1e3)}function S(t){n.classList.remove("touchstart"),g(),f&&n.classList.remove("touchend"),c=!0}var m=L(S);T(s),e.unbindEvent=k},unmounted(e){e.unbindEvent()}};function w(e){e.directive("ripple",E)}return w});
