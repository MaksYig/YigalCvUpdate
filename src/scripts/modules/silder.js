import Swiper from 'swiper/bundle';

function slider() {
  const headerSwiper = new Swiper('.header__swiper-container', {
    autoplay: {
      delay: 6000
    },
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });




  const myworkSwiper = new Swiper('.lastwork__swiper-container', {
    slidesPerView: 3,
    loop: true,
    wrapperClass: 'lastwork__swiper-wrapper',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      750: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }

  });

  if (window.matchMedia("(max-width: 825px )").matches) {
    const diplomSlider = new Swiper('.diploms__swiper-container', {
      wrapperClass: 'diploms__swiper-wrapper',
      slidesPerView: 1,
      autoplay: {
        delay: 2500
      },
      loop: true,
    });
  }



}
export default slider;