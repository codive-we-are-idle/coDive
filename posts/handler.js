import { elements } from './dom.js';

export const postsHandlers = {
  /**
   * 자유게시판 텝 클릭 핸들러
   * @param {Function} loadPostsFromServer 게시판 리로드 함수
   */
  handleClickFreeTab(loadPostsFromServer) {
    return () => {
      elements.freeBtn.classList.add('is-active');
      loadPostsFromServer('FREE');
    };
  },
  /**
   * 구인 텝 클릭 핸들러
   * @param {Function} loadPostsFromServer 게시판 리로드 함수
   */
  handleClickRecruitTab(loadPostsFromServer) {
    return () => {
      elements.freeBtn.classList.add('is-active');
      loadPostsFromServer('RECRUIT');
    };
  },
};
