import { getDate } from '../utils/date.js';
import { getNode } from '../utils/getNode.js';
import { createBoard, createRank } from './create.js';

export const renderRank = (rankList, endpoint) => {
  let rankingContents = endpoint === 'team' ? getNode('#team') : getNode('#personal');
  rankList.forEach((item, index) => {
    rankingContents.insertAdjacentHTML('beforeend', createRank(item, index));
  });
};

export const renderBoard = boardList => {
  const communityBox = getNode('.communityContentsBox');
  const postHTML = boardList.map(item => createBoard(item)).join('');

  // TODO: 게시판 탭 누를떄마다 번쩍거림
  // 번쩍거리는 이유는 innerHTML을 = ''으로 한번 비웠다가 다시 채워서
  // '' 값 으로 비웠다가 채우지말고 바로 바로 데이터로 갈아 끼는 식으로 해결
  communityBox.innerHTML = postHTML;
};

export const setDate = () => {
  const dateTag = getNode('.updatedDate');
  dateTag.textContent = getDate();
};

export const toggleBoardTabClass = className => {
  const freeBoardBtn = getNode('#free-board');
  const groupBoardBtn = getNode('#group-recruitment');

  if (className === 'groupBoard') {
    freeBoardBtn.classList.remove('is-button-active');
    groupBoardBtn.classList.add('is-button-active');
  } else {
    groupBoardBtn.classList.remove('is-button-active');
    freeBoardBtn.classList.add('is-button-active');
  }
};
