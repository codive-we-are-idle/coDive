import { apiService } from '../../lib/api/service.js';
import { getNode } from '../../lib/utils/getNode.js';
import { showToast } from '../../toast/index.js';
import { eventBinding } from './listener.js';
import { checkWriter, renderBoardDetail } from './render.js';

/**
 * @description 게시글 상세 정보 데이터를 가져온다
 * @param {string} boardId
 * @param {string} endpoint
 */
export const getBoardDetailData = async (boardId, endpoint) => {
  try {
    const response = await apiService.get(endpoint);
    const selectedBoardData = response.find(boardData => String(boardData.id) === String(boardId));
    renderBoardDetail(selectedBoardData);
    checkWriter(selectedBoardData);
  } catch (error) {
    showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};

/**
 * @description 게시글 정보를 제거한다.
 * @param {string} boardId
 * @param {string} endpoint
 */
export const deleteBoardData = async (boardId, endpoint) => {
  try {
    const response = await apiService.delete(`${endpoint}/${boardId}`);
    showToast({ message: '게시글이 삭제되었습니다.', duration: 3000, type: 'success' });
  } catch (error) {
    showToast({ message: error, duration: 3000, type: 'fail' });
    throw error;
  }
};

/**
 * 해당 페이지의 HTML과 JS를 동적으로 불러와서 app 영역에 렌더링하는 함수
 * @param {string} pagePath - 페이지 경로 (예: '/list')
 * @returns {Promise<void>}
 */
export async function loadPage() {
  const pagePath = '/list';
  const pageName = pagePath.slice(1); // /list → list
  try {
    // HTML 불러오기
    const htmlRes = await fetch(`/pages${pagePath}/${pageName}.html`);
    if (!htmlRes.ok) throw new Error('HTML not found');
    const html = await htmlRes.text();
    getNode('.board-container').insertAdjacentHTML('afterbegin', html);

    // JS 동적으로 불러오기 (모듈)
    try {
      await import(`/pages${pagePath}/${pageName}.js`);
      eventBinding();
    } catch (e) {
      console.log('JS 파일이 없거나 오류:', e);
    }
  } catch (e) {
    document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
  }
}
