/**
 * toast 표시 애니메이션
 * @param {number} duration
 */
export const alertAnimation = duration => {
  const toast = document.querySelector('.toast');
  const progressBar = document.querySelector('.progress-bar');
  const tl = gsap.timeline();

  tl.set(toast, {
    opacity: 0,
    y: -50,
    scale: 0.8,
  })
    .set(progressBar, { width: '100%' })
    .to(toast, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
    })
    .to(
      progressBar,
      {
        width: '0%',
        duration: duration / 1000,
        ease: 'none',
      },
      0.4
    )
    .to(toast, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      duration: 0.3,
    });
};
