/**
 * 카테고리, 제목 태그 생성
 * @param {string} label
 * @returns {HTMLDivElement} 태그 생성
 */
export const createInputTags = label => {
  const placeholder = label === 'Category' ? '카테고리를 입력해 주세요.' : '제목을 입력해 주세요.';

  return `
        <h1 class="label">${label}</h1>
        <input type="text" placeholder="${placeholder}" />
      `;
};

/**
 *  write, preview 버튼 생성
 * @param {string} label
 * @returns {HTMLDivElement} 태그 생성
 */
export const createTabButton = label => {
  return `<button id="write-${label}-button" type="button" class="${label === 'Write' ? 'is-button-active' : ''}">${label}</button>`;
};
