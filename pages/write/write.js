import { renderWriteCategory, renderWriteTitle, renderTabButton } from './render.js';
import { getNode } from '../../lib/utils/getNode.js';
import { handleTabButton, handleSubmitButton } from './handler.js';

export const initWrite = () => {
  renderWriteCategory();
  renderWriteTitle();
  renderTabButton();
  const submitButton = getNode('.submit-button');
  submitButton.addEventListener('click', handleSubmitButton);

  const tabButtons = getNode('.button-box');
  tabButtons.addEventListener('click', handleTabButton);
};

initWrite();
