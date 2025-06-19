export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
//   slidesPerView: 2,
  spaceBetween: 30,
  speed: 1000,
  
  // Autoplay 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
