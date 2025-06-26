import { localStorageUtil } from '../../lib/index.js';
import { CO_DIVE_EMAIL, pretendLogin } from './config.js';
import { elements } from './dom.js';
import { handleGithubLogin, handleLogin, handleRegister } from './handlers.js';

/**
 * 로그인 컨드롤러
 */
export const loginController = {
  eventBinding() {
    // elements.loginForm.addEventListener('submit', handleLogin);
    elements.loginBtn.addEventListener('click', handleLogin);
    elements.registerBtn.addEventListener('click', handleRegister);
    elements.githubLoginBtn.addEventListener('click', handleGithubLogin);
  },

  /**
   * 로컬 스토리지에서 저장된 email이 있다면 체크 박스 및 이메일 input 채워서 렌더링
   */
  renderEmailFromLocalStorage() {
    const email = localStorageUtil.getValue(CO_DIVE_EMAIL);
    if (email) {
      elements.emailInput.value = email;
      elements.rememberMeChkBox.checked = true;
    }
  },

  /**
   * 깃허브 로그인 한 척 함수
   */
  pretendToGithubLogin() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      pretendLogin();
    }
  },

  init() {
    this.eventBinding();
    this.renderEmailFromLocalStorage();
  },
};
