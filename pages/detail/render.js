import { getNode } from '../../lib/utils/getNode.js';
import { replaceMarkDown } from '../../lib/utils/markDownReplace.js';
import { sessionStorageUtil } from '../../lib/utils/sessionStorageUtil.js';

/**
 * @description 게시판 상세정보를 화면에 rendering한다.
 * @param {object} boardData
 */
export const renderBoardDetail = boardData => {
  const category = getNode('.category');
  const title = getNode('.board-detail-title');
  const writer = getNode('.writer');
  const writeDate = getNode('.writeDate');
  const content = getNode('.contents');
  const detailContent = getNode('.board-detail-content');

  detailContent.setAttribute('data-id', boardData.id);
  category.textContent = boardData.category;
  title.textContent = boardData.title;
  writer.textContent = boardData.writer;
  writeDate.textContent = boardData.createdAt;
  content.innerHTML = replaceMarkDown(boardData.contents);
};

export const checkWriter = boardData => {
  const boardToken = boardData.writer.accessToken;
  const userToken = sessionStorageUtil.getSession().accessToken;
  const buttonArea = getNode('.writer-button');
  if (boardToken !== userToken) {
    buttonArea.style.display = 'none';
  }
};
