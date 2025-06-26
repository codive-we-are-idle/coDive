/**
 * @description score에 따라 정렬하는 함수
 *
 * @param {object} data
 * @returns {object}
 */
export const sortRaking = data => {
  return data.sort((a, b) => b.score - a.score);
};
