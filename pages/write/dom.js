import { removeClass, addClass } from '../../lib/utils/attribute.js';

/**
 * write, preview 버튼 css class 상태 변경 함수
 * @param {void}
 * @returns {void}
 */
export const onChangeButtonCssClass = (nodeList, node) => {
  nodeList.forEach(btn => {
    removeClass(btn, 'is-button-active');
  });
  addClass(node, 'is-button-active');
};

/**
 * write, preview 버튼 hidden 상태 변경 함수
 * @param {void}
 * @returns {void}
 */
export const onChangeHiddenTextField = ({ textArea, preview, isWrite }) => {
  if (isWrite) {
    preview.hidden = true;
    textArea.hidden = false;
  } else {
    textArea.hidden = true;
    preview.hidden = false;
  }
};
