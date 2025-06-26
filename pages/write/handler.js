import { getNode } from '../../lib/utils/getNode.js';
import { getWriteRequestBody } from './setData.js';
import { replaceMarkDown } from '../../lib/utils/markDownReplace.js';
import { onChangeButtonCssClass, onChangeHiddenTextField } from './dom.js';
import { writeDataValidator } from './validator.js';
import { apiService } from '../../lib/api/service.js';

/**
 * 글 작성 후 서버에게 정보 전달
 * @param {void}
 * @returns {void}
 */
export const handleSubmitButton = async e => {
  e.preventDefault();
  const requestBody = getWriteRequestBody();
  // try catch 사용자 입력
  writeDataValidator(requestBody);
  apiService.post('freeBoard', requestBody);
  showToast({ message: '게시글이 작성되었습니다', type: 'success' });
};

/**
 * write, preview 버튼 핸들링 함수
 * @param {void}
 * @returns {void}
 */
export const handleTabButton = e => {
  const buttons = document.querySelectorAll('.button-box >button');
  const textArea = getNode('textArea');
  const clickedBtn = e.target;
  const preview = getNode('.preview');

  if (clickedBtn.tagName !== 'BUTTON') return;
  onChangeButtonCssClass(buttons, clickedBtn);
  console.log(clickedBtn.id);
  if (clickedBtn.id === 'write-Write-button') {
    onChangeHiddenTextField({ textArea, preview, isWrite: true });
    preview.innerHTML = replaceMarkDown(textArea.value);
  } else {
    onChangeHiddenTextField({ textArea, preview, isWrite: false });
  }
};
