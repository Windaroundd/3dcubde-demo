var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false,
  },
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
