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
  spaceBetween: 0,

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
var myVideo = document.getElementById("video");
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}
