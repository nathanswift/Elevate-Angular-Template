import $ from 'jquery';

export function animate() {
    $.fn.extend({
        animateCss: function (animationName, callback) {
          var animationEnd = (function (el) {
            var animations = {
              animation: 'animationend',
              OAnimation: 'oAnimationEnd',
              MozAnimation: 'mozAnimationEnd',
              WebkitAnimation: 'webkitAnimationEnd',
            };
            for (var t in animations) {
              if (el.style[t] !== undefined) {
                return animations[t];
              }
            }
          })(document.createElement('div'));
          $(this).removeClass(this[0].classList.value);
          this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (typeof callback === 'function') callback();
          });
          return this;
        },
      });
}