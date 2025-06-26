/**
 * @description 상세페이지 오른쪽에서 왼쪽으로 이동
 */
export const showDetail = () => {
  // board-list를 왼쪽으로 축소
  gsap.fromTo('.board-detail-content', { x: '100%' }, { x: '0%', duration: 2, ease: 'power2.out' });
};

/**
 * @description 상세페이지 왼쪽에서 오른쪽으로 이동
 */
export const hideDetail = () => {
  gsap.to('.board-detail-content', {
    duration: 2,
    x: '100%',
    ease: 'power2.in',
  });
};
