// class MobileMenu {
//   constructor() {
//       this.DOM = {};
//       this.DOM.btn = document.querySelector('.mobile-menu__btn');
//       this.DOM.cover = document.querySelector('.mobile-menu__cover');
//       this.DOM.container = document.querySelector('#global-container');
//       this.eventType = this._getEventType();
//       this._addEvent();
//   }

//   _getEventType() {
//       return window.ontouchstart ? 'touchstart' : 'click';
//   }

//   _toggle() {
//       this.DOM.container.classList.toggle('menu-open');
//   }

//   _addEvent() {
//       this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//       this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
//   }
// }

// new MobileMenu();

document.addEventListener("DOMContentLoaded",function(){
    const hero1 = new HeroSlider(".swiper-pc");

    // hero5.start({delay:3000});
});
   
class HeroSlider {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
         // Optional parameters
         // direction: 'vertical',
         loop: true,
         grabCursor:true,
         centeredSlides:true,

         pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
   
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}


document.addEventListener("DOMContentLoaded",function(){
    const hero1 = new HeroSlider1(".swiper-pe");

    // hero5.start({delay:3000});
});
   
class HeroSlider1 {
    constructor(el){
      this.el = el;
      this.swiper = this._initSwiper();
    }
   
     _initSwiper(){
      return new Swiper(this.el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
         // Optional parameters
         // direction: 'vertical',
         loop: true,
         grabCursor:true,
         centeredSlides:true,
         slidesPerView:1,

         pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
   
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
         }
      });
     }
   
     start(options = {}) {
       options = Object.assign({
         delay:3000,
         disableOnInteraction:false
       },options);
       this.swiper.params.autoplay = {
         delay:6000,
         disableOnInteraction:false
       }
       this.swiper.autoplay.start();
     }
     stop(){
       this.swiper.autoplay.stop();
     }
}
