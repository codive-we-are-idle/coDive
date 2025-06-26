import { alertAnimation } from './animation.js';

const configType = {
  success: { icon: '🙆‍♀️', color: 'dodgerblue' },
  info: { icon: '💁🏻‍♀️', color: 'green' },
  fail: { icon: '🙅‍♀️', color: '#9b0e17' },
};

/**
 * 토스트 알림을 표시 함수
 *
 * @param {Object} options - 토스트 옵션
 * @param {string} options.message - 표시할 메시지
 * @param {number} options.duration - 표시 시간 (밀리초)
 * @param {string} options.type - 토스트 타입 ('success', 'fail', 'info')
 */
export const showToast = ({ message, duration = 3000, type = 'success' }) => {
  const { icon, color } = configType[type];

  // 기존 토스트가 있으면 제거
  const isExisting = document.querySelector('.toast');
  if (isExisting) {
    isExisting.remove();
  }

  // 새 토스트 엘리먼트 생성
  const toast = document.createElement('div');
  toast.className = 'toast';

  // innerHTML을 사용해서 내용 설정 (append 대신)
  toast.innerHTML = `
    <div class="icon">${icon}</div>
    <div class="message">${message}</div>
    <div class="progress-container">
      <div class="progress-bar"></div>
    </div>
  `;

  // 배경색 동적 설정
  toast.style.backgroundColor = color;

  // body에 추가
  document.body.appendChild(toast);

  // 애니메이션 실행
  alertAnimation(duration);
};
