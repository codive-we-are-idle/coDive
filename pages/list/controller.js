import { setBoardList } from './dom.js';
import { apiService } from '../../lib/api/service.js';

/**
 * @description 게시글 목록 데이터를 가져온다.
 * @param {string} endpoint
 */
export const getBoardList = async endpoint => {
  try {
    const response = await apiService.get(endpoint);
    setBoardList(response);
  } catch (error) {
    // showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};
