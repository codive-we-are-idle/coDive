gsap.registerPlugin(ScrollTrigger);

/**
 * 스크롤 시 top-logo 없앰
 */
const initTopLogoHide = () => {
  const topLogo = document.querySelector('.top-logo');

  if (!topLogo) return;
  gsap.to(topLogo, {
    opacity: 0,
    height: 0,
    marginBottom: 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: 'body',
      start: '1px top',
      end: '1px top',
      scrub: 0.1,
      markers: false,
    },
  });
};

const scroll = () => {
  const tl = gsap.timeline();

  tl.to('.hero-content h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  }).to(
    '.hero-content p',
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    },
    '-=0.5'
  );

  // 섹션 제목 애니메이션
  gsap.utils.toArray('.section h2, .cards-container h2').forEach(title => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // 섹션 텍스트 애니메이션
  gsap.utils.toArray('.section p').forEach((p, i) => {
    gsap.fromTo(
      p,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: p,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};

/**
 * Ui 인터렉션 init 함수
 */
export const setUiInteraction = () => {
  initTopLogoHide();
  scroll();
};
