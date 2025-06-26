import { showToast } from '../../toast/index.js';
import { CO_DIVE_EMAIL, GITHUB_CONFIG } from './config.js';
import { elements } from './dom.js';
import { localStorageUtil, sessionStorageUtil } from '../../lib/index.js';
import { apiService } from '../../lib/api/service.js';

/**
 * 로그인 핸들러
 */
export const handleLogin = async e => {
  e.preventDefault();
  const email = elements.emailInput.value;
  const password = elements.passwordInput.value;

  // 이메일 validation
  if (!email) {
    showToast({ message: '이메일을 입력해 주세요.', type: 'fail' });
    return;
  }
  // 비밀번호 validation
  if (!password) {
    showToast({ message: '비밀번호를 입력해 주세요.', type: 'fail' });
    return;
  }

  try {
    const { accessToken, user } = await apiService.post(`login`, {
      email: email,
      password: password,
    });

    // 세션 저장
    sessionStorageUtil.setSession({ token: accessToken, user: user.email });

    // remember me 로컬 스토리지
    if (elements.rememberMeChkBox.checked) {
      localStorageUtil.setValue({ key: CO_DIVE_EMAIL, data: email });
    } else {
      localStorageUtil.removeValue(CO_DIVE_EMAIL);
    }

    // TODO: 메인으로 넘아가는 기능 추가
    showToast({ message: '로그인에 성공 하셨습니다!' });
  } catch {
    showToast({ message: '아이디나 비밀번호를 잘못 입력하셨습니다.', type: 'fail' });
  }
};

/**
 * 회원가입 핸들러
 */
export const handleRegister = async e => {
  e.preventDefault();
  const email = elements.emailInput.value;
  const password = elements.passwordInput.value;

  try {
    await apiService.post(`register`, {
      email: email,
      password: password,
    });

    email = '';
    password = '';

    showToast({ message: '회원가입에 성공 하셨습니다!' });
  } catch {
    showToast({ message: '회원가입에 실패 하였습니다.', type: 'fail' });
  }
};

/**
 * 깃허브 로그인 핸들러
 */
export const handleGithubLogin = async () => {
  const CLIENT_ID = GITHUB_CONFIG.CLIENT_KEY;
  const REDIRECT_URI = window.location.origin;

  // 랜덤한 state 값을 생성하여 같이 보냄
  // 같이 보내는 이유는 ? CSRF를 방지하고 내가 보낸 요청과 같은 곳에서 오는 요청이라는 것을 알게 하는 신분증 역할을 수행
  const state = Math.random().toString(36).substring(7);
  // localStorageUtil.setValue(GITHUB_CONFIG.OAUTH_STATE, state);

  // 1. GitHub로 리다이렉트
  window.location.href = `${GITHUB_CONFIG.LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${state}&prompt=select_account`;

  // 세션 저장
  sessionStorageUtil.setSession({ token: accessToken, user: user.email });
};
