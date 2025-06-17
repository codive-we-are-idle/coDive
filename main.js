import { posts } from './posts/index.js';
import { rank } from './rank/index.js';
import { carousel } from './carousel/index.js';
import { auth } from './auth/index.js';

document.addEventListener('DOMContentLoaded', () => {
  // 케러셀
  carousel.init();
  // posts
  posts.init();
  // rank
  rank.init();
  // auth
  auth.init();
});
