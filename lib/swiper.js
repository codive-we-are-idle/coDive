import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export const initCarousel = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  parallax: true,
});
