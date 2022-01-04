document.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.hero-slider', {
    // Optional parameters
    // direction: 'vertical',
    effect: 'flip', // can be flip, cube, etc
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
})