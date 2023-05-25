/* 1 of 2 : FancyBox */
$().fancybox({

});

/* 2 of 2 : Swiper */
const mySwiper = new Swiper(".swiper", {
  // If loop true set photoswipe - counterEl: false
  loop: true,
  slidesPerView: 3,
  spaceBetween: 27,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


$("[data-fancybox]").fancybox({
  beforeClose: function( instance, slide ) {
    console.log(slide)
    // Tip: Each event passes useful information within the event object:

    // Object containing references to interface elements
    // (background, buttons, caption, etc)
    // console.info( instance.$refs );

    // Current slide options
    // console.info( slide.opts );

    // Clicked element
    // console.info( slide.opts.$orig );

    // Reference to DOM element of the slide
    // console.info( slide.$slide );

  }
});