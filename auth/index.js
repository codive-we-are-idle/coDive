import { elements, renderAuthSection } from './dom.js';

export const auth = {
  bindEvent() {
    // 로그인 버튼
    elements.loginBtn.addEventListener('click', () => {
      elements.loginModal.classList.add('show');
    });

    // 모달 닫기 버튼
    elements.closeBtn.addEventListener('click', () => {
      elements.loginModal.classList.remove('show');
    });
    // 모달 닫기 버튼
    elements.loginModal.addEventListener('click', (e) => {
      if (e.target === elements.loginModal) {
        elements.loginModal.classList.remove('show');
      }
    });

    // 깃허브 로그인 버튼
    elements.githubBtn.addEventListener('click', async () => {
      const CLIENT_ID = 'Ov23ctbbq5J8bocxUM3E';
      const REDIRECT_URI = window.location.origin;

      // 1. GitHub로 리다이렉트
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&prompt=select_account`;
    });
  },
  init() {
    renderAuthSection();

    this.bindEvent();
  },
};
