/**
 * 사용자 세션 관리 유틸리티
 */
export const sessionStorageUtil = {
  /**
   * 사용자 로그인 정보를 세션 스토리지에 저장
   * @param {Object} params - 저장할 세션 데이터
   * @param {string} params.token - 액세스 토큰
   * @param {string} params.user - 사용자명
   */
  setSession({ token, user }) {
    const userName = user.split('@')[0];

    try {
      const userData = { accessToken: token, userName };
      sessionStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('세선 저장중 오류 : ', error);
    }
  },
  /**
   * 세션 스토리지에서 사용자 로그인 정보를 가져옴
   * @returns {Object|null} 사용자 세션 데이터 또는 null
   * @returns {string} returns.accessToken - 액세스 토큰
   * @returns {string} returns.userName - 사용자명
   */
  getSession() {
    try {
      const userData = sessionStorage.getItem('user');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('세선 불러오기 중 오류 : ', error);
    }
  },
};
