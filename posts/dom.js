// DOM 요소 선택
export const elements = {
  contents: document.querySelector('.contents'),
  freeBtn: document.querySelector('.tab-free'),
  recruitBtn: document.querySelector('.tab-recruit'),
};
/**
 * board item 요소 생성 함수
 * @param {{id: number, title: string, createAt: string}} post - 게시물 객체
 * @returns {string} HTML 문자열
 */
const createPostElement = ({ id, category, title, createAt }) => {
  return `
    <li class="item" data-id="${id}">
      <span class="category">${category}</span>
      <span class="title">${title}</span>
      <span class="createAt">${createAt}</span>
    </li>
  `;
};

/**
 * 게시물들을 화면에 표시
 * @param {object[]} posts
 * @returns
 */
export const renderPosts = (posts) => {
  if (!elements.contents) return;

  if (posts.length === 0) {
    elements.contents.innerHTML = '<li>게시물이 없습니다.</li>';
    return;
  }
  // 게시물 HTML 생성
  const postsHTML = posts.map((post) => createPostElement(post)).join('');
  elements.contents.innerHTML = postsHTML;
};

export const toggleTabActive = (category) => {
  elements.freeBtn.classList.remove('is-active');
  elements.recruitBtn.classList.remove('is-active');

  if (category === 'FREE') {
    elements.freeBtn.classList.add('is-active');
  } else {
    elements.recruitBtn.classList.add('is-active');
  }
};
