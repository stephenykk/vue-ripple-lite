import "./ripple.css";

function throttle(fn: (...arg: any[]) => any, delay = 50) {
  var enable = true;
  return function (...args: any[]) {
    if (!enable) return;
    // fn.apply(this, args);
    fn(...args)
    enable = false;
    setTimeout(function () {
      enable = true;
    }, delay);
  };
}

const ripple = {
  mounted(el: HTMLElement) {
    const appendRippleWrap = (el: HTMLElement) => {
      const wrapDiv = document.createElement("div");
      wrapDiv.classList.add("contentbox");
      wrapDiv.classList.add("ripple-wrap");

      var elStyle = getComputedStyle(el, null);
      var style = {
        position: "absolute",
        left: elStyle.paddingLeft,
        right: elStyle.paddingRight,
        top: elStyle.paddingTop,
        bottom: elStyle.paddingBottom,
      };
      Object.assign(wrapDiv.style, style);

      el.appendChild(wrapDiv);
      // @ts-ignore
      el.rippleWrap = wrapDiv;

      return wrapDiv;
    };

    var rippleWrap = el;
    if (el.dataset.range === "content-box") {
      // 目标元素的content-box, 作为波纹效果的范围
      el.style.position = "relative";
      rippleWrap = appendRippleWrap(el);
    }

    var rippleDiv = document.createElement("div");
    rippleDiv.classList.add("ripple-div");
    rippleWrap.appendChild(rippleDiv);

    var transEnd = true;
    var touchEnd = true;

    function setSizeAndBg(rippleWrap: HTMLElement) {
      var style = getComputedStyle(rippleWrap, null);
      var width = parseInt(style.width);
      var height = parseInt(style.height);
      var autoSize = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * 2.5;

      var size = el.dataset.size;
      rippleDiv.style.width = rippleDiv.style.height =
        (size ? parseInt(size) : autoSize) + "px";
      var bg = el.dataset.background;
      bg && (rippleDiv.style.backgroundColor = bg);
    }

    function resetSizeAndBg(rippleWrap: HTMLElement) {
      rippleDiv.style.width = rippleDiv.style.height = "5px";
      var bg = el.dataset.background;
      bg && (rippleDiv.style.backgroundColor = "transparent");
    }

    function bindEvent(rippleWrap: HTMLElement) {
      rippleWrap.addEventListener("touchstart", onTouchstart, false);
      rippleWrap.addEventListener("touchend", onTouchend, false);
      rippleDiv.addEventListener("transitionend", onTransitionend, false);
    }

    function unbindEvent() {
      el.removeEventListener("touchstart", onTouchstart, false);
      el.removeEventListener("touchend", onTouchend, false);
      rippleDiv.removeEventListener("transitionend", onTransitionend, false);
    }

    function onTouchstart(ev: TouchEvent) {
      if (!transEnd) return;
      touchEnd = transEnd = false;

      // set position of ripple-div
      var touch = ev.changedTouches[0];
      const thisEl = ev.target as HTMLElement
      var rect = thisEl.getBoundingClientRect();
      rippleDiv.style.left = touch.clientX - rect.left + "px";
      rippleDiv.style.top = touch.clientY - rect.top + "px";

      rippleDiv.classList.add("touchstart");
      setSizeAndBg(thisEl);
    }

    function onTouchend(ev: TouchEvent) {
      if (transEnd) {
        rippleDiv.classList.remove("touchstart");
        const thisEl = ev.target as HTMLElement
        resetSizeAndBg(thisEl);
      } else {
        rippleDiv.classList.add("touchend"); // 背景色向透明渐变
      }
      touchEnd = true;
    }

    function _onTransitionend(ev: TouchEvent) {
      // 多个属性会触发多次 transitionend
      rippleDiv.classList.remove("touchstart");
      resetSizeAndBg(rippleWrap);
      if (touchEnd) {
        // 过渡结束前 touchend
        rippleDiv.classList.remove("touchend");
      }
      transEnd = true;
    }

    var onTransitionend = throttle(_onTransitionend);

    bindEvent(rippleWrap);
    // @ts-ignore
    el.unbindEvent = unbindEvent;
  },
  unmounted(el: HTMLElement) {
    // @ts-ignore
    el.unbindEvent();
  },
};

export { ripple };
