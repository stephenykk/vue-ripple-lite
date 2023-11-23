const k = `.ripple-wrap {\r
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
`;
function x() {
  const e = /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/i, a = navigator.userAgent;
  return e.test(a);
}
function S(e, a = 50) {
  var d = !0;
  return function(...s) {
    d && (e(...s), d = !1, setTimeout(function() {
      d = !0;
    }, a));
  };
}
const m = x(), T = {
  mounted(e) {
    const a = () => {
      if (document.querySelector("#ripple-style"))
        return;
      const t = document.createElement("style");
      t.setAttribute("id", "ripple-style"), t.type = "text/css", document.head.appendChild(t), t.innerHTML = k;
    }, d = (t) => {
      const r = document.createElement("div");
      r.classList.add("contentbox");
      var i = getComputedStyle(t, null), o = {
        position: "absolute",
        left: i.paddingLeft,
        right: i.paddingRight,
        top: i.paddingTop,
        bottom: i.paddingBottom
      };
      return Object.assign(r.style, o), console.log("🚀 ~ file: index.ts:41 ~ appendRippleWrap ~ style:", o), t.appendChild(r), t.rippleWrap = r, r;
    };
    a();
    var s = e;
    e.dataset.range === "content-box" && (e.style.position = "relative", s = d(e)), s.classList.add("ripple-wrap");
    var n = document.createElement("div");
    n.classList.add("ripple-div"), s.appendChild(n);
    var l = !0, p = !0;
    function b(t) {
      var r = getComputedStyle(t, null), i = parseInt(r.width), o = parseInt(r.height), w = Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2)) * 2.5, f = e.dataset.size;
      n.style.width = n.style.height = (f ? parseInt(f) : w) + "px";
      var g = e.dataset.background;
      g && (n.style.backgroundColor = g);
    }
    function h(t) {
      n.style.width = n.style.height = "5px";
      var r = e.dataset.background;
      r && (n.style.backgroundColor = "transparent");
    }
    function y(t) {
      m ? (t.addEventListener("touchstart", u, !1), t.addEventListener("touchend", c, !1)) : (t.addEventListener("mousedown", u, !1), t.addEventListener("mouseup", c, !1)), n.addEventListener("transitionend", v, !1);
    }
    function L() {
      m ? (e.removeEventListener("touchstart", u, !1), e.removeEventListener("touchend", c, !1)) : (e.removeEventListener("mousedown", u, !1), e.removeEventListener("mouseup", c, !1)), n.removeEventListener("transitionend", v, !1);
    }
    function u(t) {
      if (!l)
        return;
      p = l = !1;
      var r = t.changedTouches ? t.changedTouches[0] : t;
      const i = t.target;
      var o = i.getBoundingClientRect();
      n.style.left = r.clientX - o.left + "px", n.style.top = r.clientY - o.top + "px", n.classList.add("touchstart"), n.classList.remove("touchend"), b(i);
    }
    function c(t) {
      l = !0, p = !0, n.classList.add("touchend"), setTimeout(() => {
        n.classList.remove("touchstart"), n.classList.remove("touchend"), t.target, h();
      }, 1e3);
    }
    function E(t) {
      n.classList.remove("touchstart"), h(), p && n.classList.remove("touchend"), l = !0;
    }
    var v = S(E);
    y(s), e.unbindEvent = L;
  },
  unmounted(e) {
    e.unbindEvent();
  }
};
function C(e) {
  e.directive("ripple", T);
}
export {
  C as default
};
