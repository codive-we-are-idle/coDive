/**
 * 로컬 스토리지 관리 유틸리티
 */
export const localStorageUtil = {
  /**
   * 로컬 스토리지에서 저장된 데이터 가져옴
   * @returns {string|null} 가져올 데이터의 키 값
   */
  getValue(key) {
    try {
      const value = localStorage.getItem(key);

      return JSON.parse(value);
    } catch {
      console.error(`Local storage에서 ${key} 가져오기 실패`);
      return null;
    }
  },
  /**
   * 데이터 로컬 스토리지에 저장
   * @param {object} param - 로컬 스토리이제 저장할 데이터
   * @param {string} param.key - 키 값
   * @param {any} param.data - 저장할 데이터
   */
  setValue({ key, data }) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      console.error(`Local storage에서 ${key} 저장 실패`);
    }
  },
  /**
   * 로컬 스토리지에서 저장된 데이터 삭제
   * @param {string} param.key - 키 값
   */
  removeValue(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      console.error(`Local storage에서 ${key} 삭제 실패`);
    }
  },
};
