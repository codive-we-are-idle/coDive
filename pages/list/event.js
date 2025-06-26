import { getNode } from '../../lib/utils/getNode.js';

import { handleButtonActive, handleListItem, handleWriteButton } from './handler.js';

export const listEventBind = () => {
  const buttonGroup = getNode('.button-group');
  const writeBtn = getNode('#write-button');
  const listItem = getNode('.list');
  buttonGroup.addEventListener('click', handleButtonActive);
  writeBtn.addEventListener('click', handleWriteButton);
  listItem.addEventListener('click', handleListItem);
};
