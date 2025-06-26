import { sessionStorageUtil } from '../../lib/index.js';
import { apiService } from '../../lib/api/service.js';
import { showToast } from '../../toast/index.js';

export const API_URL = 'http://localhost:3001';
export const CO_DIVE_EMAIL = 'coDive-email';
export const GITHUB_CONFIG = {
  LOGIN_URL: 'https://github.com/login/oauth/authorize',
  LOGOUT_URL: 'https://github.com/logout',
  CLIENT_KEY: 'Ov23ctbbq5J8bocxUM3E',
  OAUTH_STATE: 'oauth_state',
};

export const pretendLogin = async () => {
  try {
    const { accessToken, user } = await apiService.post(`login`, {
      email: 'doqntlrdl123@gmail.com',
      password: '123123',
    });

    sessionStorageUtil.setSession({ token: accessToken, user: user.email });
    showToast({ message: '로그인에 성공 하셨습니다!' });
  } catch (error) {
    console.error('Error : ', error);
  }
};
