import { API_CONFIG, TAB_STATE } from './config.js';

/**
 * json-server에서 posts 데이터 가져오는 함수
 * @param { string } 현재 텝에 설정된 tag 종류 FREE / RECRUIT
 * @returns {Promise<Array>}
 */
// 기본값 free tab
export const getAllPosts = async (category) => {
  try {
    // 엔드 포인트 설정
    const endpoint = API_CONFIG.ENDPOINT[category];

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('게시물을 가져오는 중 오류 발생:', error);
    throw error;
  }
};
