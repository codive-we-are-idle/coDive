import { elements, renderPosts, toggleTabActive } from './dom.js';
import { getAllPosts } from './api.js';
import { TAB_STATE } from './config.js';

export const posts = {
  // 서버에서 posts 데이터 가져오는 함수
  async loadPostsFromServer(category = TAB_STATE.currentTab) {
    try {
      // 서버에서 데이터 가져오기
      const posts = await getAllPosts(category);
      // 텝 클래스 토글
      toggleTabActive(category);
      // 화면에 표시
      renderPosts(posts);
    } catch (error) {
      console.error('게시물 불러오기 실패:', error);
      if (contentsList) {
        elements.contents.innerHTML = '<li>게시물을 불러오는데 실패했습니다.</li>';
      }
    }
  },
  // post 이벤트 바인딩 함수
  bindPostsEvent() {
    // 자유 게시판 버튼 클릭
    elements.freeBtn.addEventListener('click', () => {
      elements.freeBtn.classList.add('is-active');

      this.loadPostsFromServer('FREE');
    });
    // 구인 게시판 클릭
    elements.recruitBtn.addEventListener('click', () => {
      console.log(elements.recruitBtn);
      elements.freeBtn.classList.add('is-active');
      this.loadPostsFromServer('RECRUIT');
    });
  },
  init() {
    this.bindPostsEvent();
    this.loadPostsFromServer('FREE');
  },
};
