import { getNode } from '../../lib/utils/getNode.js';
import { createInputTags, createTabButton } from './create.js';

/**
 * 카테고리 태그 렌더링
 * @returns {void}  반환값 없음
 */
export const renderWriteCategory = () => {
  const category = getNode('#write-category');
  category.insertAdjacentHTML('beforeend', createInputTags('Category'));
};

/**
 * 제목 태그 렌더링
 * @returns {void}  반환값 없음
 */

export const renderWriteTitle = () => {
  const title = getNode('#write-title');
  title.insertAdjacentHTML('beforeend', createInputTags('Title'));
};

/**
 * write, preview 버튼 렌더링
 * @returns {void}  반환값 없음
 */
export const renderTabButton = () => {
  const buttonBox = getNode('.button-box');
  buttonBox.insertAdjacentHTML('beforeend', createTabButton('Write'));
  buttonBox.insertAdjacentHTML('beforeend', createTabButton('Preview'));
};
