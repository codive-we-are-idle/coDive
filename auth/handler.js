import { elements } from './dom.js';
import { GITHUB_CONFIG } from './config.js';

export const authHandlers = {
  /**
   * 로그인 모달 열기
   */
  handleOpenLoginMal() {
    elements.loginModal.classList.add('show');
  },
  /**
   * 로그인 모달 닫기
   */
  handleCloseModal(e) {
    console.log(e.target);
    if (e.target === elements.modalCloseBtn || e.target === elements.loginModal) {
      elements.loginModal.classList.remove('show');
    }
  },
  /**
   * 깃허브 로그인 버튼 클릭
   */
  handleGithubLogin() {
    const CLIENT_ID = GITHUB_CONFIG.CLIENT_KEY;
    const REDIRECT_URI = window.location.origin;

    // 랜덤한 state 값을 생성하여 같이 보냄
    // 같이 보내는 이유는 ? CSRF를 방지하고 내가 보낸 요청과 같은 곳에서 오는 요청이라는 것을 알게 하는 신분증 역할을 수행
    const state = Math.random().toString(36).substring(7);
    localStorage.setItem(GITHUB_CONFIG.OAUTH_STATE, state);

    // 1. GitHub로 리다이렉트
    window.location.href = `${GITHUB_CONFIG.LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&prompt=select_account`;
  },
  /**
   * 로그아웃
   */
  handleLogout() {
    // 로그인 시 사용한 state 값 제거
    localStorage.removeItem(GITHUB_CONFIG.OAUTH_STATE);
    // url 에서 OAuth 파라미터들 제거
    const url = new URL(window.location);
    url.searchParams.delete('code');
    url.searchParams.delete('state');

    // code 와 state가 삭제된 url로 다시 로드
    window.location.href = url.toString();
  },
};
