
var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});