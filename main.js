import { setupRouter, renderPage } from './router.js';
import { auth } from './auth/index.js';
import { setBoardDataList, setRankData } from './lib/dom/data.js';
import { setDate } from './lib/dom/render.js';
import { bindingEvent } from './lib/event/listener.js';
import {} from './lib/swiper.js';

function init() {
  // 이벤트 바인딩
  bindingEvent();

  // 게시판
  setBoardDataList('freeBoard');

  // // 랭킹
  setRankData('team');
  setRankData('personal');
  setDate();

  // 로그인
  auth.init();
}
// 라우터 초기화
setupRouter();

// 초기 페이지 렌더링
renderPage(window.location.pathname || '/');
document.getElementById('app').style.opacity = 1;

document.addEventListener('DOMContentLoaded', init);
