import './ripple.css';

export default function (Vue) {
    Vue.directive('ripple', {
        inserted(el, binding, value) {
            el.classList.add('ripple-wrap');
            var rippleDiv = document.createElement('div');
            rippleDiv.classList.add('ripple-div');
            el.appendChild(rippleDiv);


            var transEnd = true;
            var touchEnd = true;

            function setSize(el) {
                var style = getComputedStyle(el, null);
                var width = parseInt(style.width);
                var height = parseInt(style.height);
                var autoSize = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * 2.5;

                var size = el.dataset.size;
                rippleDiv.style.width = rippleDiv.style.height = (size ? parseInt(size) : autoSize) + 'px';
            }

            function resetSize() {
                rippleDiv.style.width = rippleDiv.style.height = '5px';
            }

            function bindEvent(el) {
                el.addEventListener('touchstart', onTouchstart, false);
                el.addEventListener('touchend', onTouchend, false);
                rippleDiv.addEventListener('transitionend', onTransitionend, false);
            }

            function unbindEvent() {
                el.removeEventListener('touchstart', onTouchstart, false);
                el.removeEventListener('touchend', onTouchend, false);
                rippleDiv.removeEventListener('transitionend', onTransitionend, false);
            }

            function onTouchstart(ev) {
                if (!transEnd) return;
                touchEnd = transEnd = false;

                // set position of ripple-div
                var touch = ev.changedTouches[0];
                var rect = this.getBoundingClientRect();
                rippleDiv.style.left = touch.clientX - rect.left + 'px';
                rippleDiv.style.top = touch.clientY - rect.top + 'px';

                rippleDiv.classList.add('touchstart');
                setSize(this);
            }


            function onTouchend(ev) {
                if (transEnd) {
                    rippleDiv.classList.remove('touchstart');
                    resetSize();
                } else {
                    rippleDiv.classList.add('touchend'); // 背景色向透明渐变
                }
                touchEnd = true;
            }

            function onTransitionend(ev) {
                rippleDiv.classList.remove('touchstart');
                resetSize();
                if (touchEnd) {// 过渡结束前 touchend
                    rippleDiv.classList.remove('touchend');
                }
                transEnd = true;
            }

            bindEvent(el);
            el.unbindEvent = unbindEvent;
        },
        unbind(el) {
            el.unbindEvent();
        }
    });
}