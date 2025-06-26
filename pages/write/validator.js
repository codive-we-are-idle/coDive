import { isNumericString } from '../../lib/utils/type.js';
import { showToast } from '../../toast/index.js';
/**
 * @description 입력값이 빈 문자열인지 확인
 * @param {string} content 확인 받을 값
 *  @param {string} label 확인 받을 값의 이름
 * @returns {showToast} 사용자에게 재입력 요청
 */
const isSpace = (content, label) => {
  const object = label === '카테고리' ? label + '를' : label + '을';
  if (content.trim('') == '') {
    return showToast({ message: `${object} 입력해 주세요!`, type: 'fail' });
  }
};

/**
 * @description 입력값이 숫자인지 확인
 * @param {string} content 확인 받을 값
 *  @param {string} label 확인 받을 값의 이름
 * @returns {showToast} 사용자에게 재입력 요청
 */
const isNumberValue = content => {
  if (isNumericString(content)) {
    return showToast({ message: `문자열을 입력해 주세요!`, type: 'fail' });
  }
};

/**
 * @description 입력받은 카테고리 값 유효성 검사
 * @param {string} categoryValue 카테고리 입력값
 */
const categoryValidator = categoryValue => {
  isSpace(categoryValue, '카테고리');
  isNumberValue(categoryValue);
};

/**
 * @description 입력받은 제목 값 유효성 검사
 * @param {string} categoryValue 카테고리 입력값
 */
const titleValidator = titleValue => {
  isSpace(titleValue, '제목');
  isNumberValue(titleValue);
};

/**
 * @description 입력받은 본문 값 유효성 검사
 * @param {string} categoryValue 카테고리 입력값
 */
const contentsValidator = contentValue => {
  isSpace(contentValue, '본문');
  isNumberValue(contentValue);
};

/**
 * @description 입력받은 전체 데이터 유효성 검사
 * @param {string} requestBody
 */
export const writeDataValidator = requestBody => {
  const { category, title, contents, writer, ...rest } = requestBody;
  categoryValidator(category);
  titleValidator(title);
  contentsValidator(contents);
};
