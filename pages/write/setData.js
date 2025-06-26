import { getNode } from '../../lib/utils/getNode.js';

/**
 * api request body 생성
 * @param {void}
 * @returns {object} request body
 */
export const getWriteRequestBody = () => {
  const titleValue = getNode('#write-title input').value;
  const categoryValue = getNode('#write-category input').value;
  const textAreaValue = getNode('textarea').value;
  const now = new Date().toLocaleString().trim();

  return {
    category: categoryValue,
    title: titleValue,
    contents: textAreaValue,
    writer: '유저이름',
    createdAt: now,
    updatedAt: now,
  };
};
