import { elements, renderAuthSection } from './dom.js';
import { authHandlers } from './handler.js';

export const auth = {
  bindEvent() {
    // 로그인 모달 열기
    elements.loginBtn.addEventListener('click', authHandlers.handleOpenLoginMal);

    // 로그인 모달 닫기
    elements.loginModal.addEventListener('click', authHandlers.handleCloseModal);

    // 깃허브 로그인 버튼
    elements.githubBtn.addEventListener('click', authHandlers.handleGithubLogin);

    // 로그 아웃
    elements.logoutBtn.addEventListener('click', authHandlers.handleLogout);
  },
  init() {
    renderAuthSection();

    this.bindEvent();
  },
};
