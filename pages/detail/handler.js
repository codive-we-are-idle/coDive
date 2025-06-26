import { getNode } from '../../lib/utils/getNode.js';
import { hideDetail, showDetail } from './animation.js';
import { deleteBoardData, getBoardDetailData } from './controller.js';

/**
 * @description 게시판 목록 click이벤트 핸들러
 * @param {*} e
 */
export const handleBoardListClick = e => {
  e.preventDefault();
  const content = e.target.closest('li');
  const boardDetail = getNode('.board-detail-content');

  if (content) {
    const boardId = content.getAttribute('data-id');
    getBoardDetailData(boardId, 'freeBoard');
    boardDetail.hidden = false;
    showDetail();
  }
};

/**
 * @description 게시글 삭제 버튼 click이벤트 핸들러
 * @param {*} e
 */
export const handleBoardDelete = e => {
  e.preventDefault();
  const deleteBtn = e.target.closest('a');
  const boardDetail = getNode('.board-detail-content');
  if (deleteBtn) {
    const boardId = boardDetail.getAttribute('data-id');
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteBoardData(boardId, 'freeBoard');
    }
  }
};

/**
 * @description 상세페이지 닫기버튼 click이벤트 핸들러
 * @param {*} e
 */
export const handleBoardDetailReturn = e => {
  e.preventDefault();
  const returnBtn = e.target.closest('a');
  if (returnBtn) {
    hideDetail();
  }
};
