import { getNode } from '../../lib/utils/getNode.js';

const createBoardItem = listData => {
  return `
  <li class="post-item" data-id="${listData.id}">
          <span class="badge">${listData.category}</span>
          <span class="post-title">${listData.title}</span>
          <span class="post-date">${listData.createdAt}</span>
        </li>`;
};

export const setBoardList = boardList => {
  const postHTML = boardList.map(item => createBoardItem(item)).join('');

  const listBox = getNode('.list');

  listBox.insertAdjacentHTML('beforeend', postHTML);
};

export const toggleBoardTabClass = className => {
  const freeBoardBtn = getNode('#free-button');
  const groupBoardBtn = getNode('#group-button');
  if (className === 'group-button') {
    freeBoardBtn.classList.remove('button-active');
    groupBoardBtn.classList.add('button-active');
  } else {
    groupBoardBtn.classList.remove('button-active');
    freeBoardBtn.classList.add('button-active');
  }
};
