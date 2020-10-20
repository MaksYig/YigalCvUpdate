import Swiper from 'swiper/bundle';

window.addEventListener("DOMContentLoaded", () => {

  const headerSwiper = new Swiper('.header__swiper-container', {
    autoplay:{
      delay:5000
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });





});
