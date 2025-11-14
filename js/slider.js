let swiperInstance = null;

function initSwiper() {
  const screenWidth = window.innerWidth;
  const container = document.querySelector('.pilares-swiper');

  if (!container) return;

  if (screenWidth <= 1220 && !swiperInstance) {
    swiperInstance = new Swiper(container, {
      slidesPerView: 1.1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  } else if (screenWidth > 1220 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
