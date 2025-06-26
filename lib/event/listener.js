import { handleBoardButton, handleMenuIsActive } from './handler.js';

export const bindingEvent = () => {
  // const nav = document.querySelector('.menu');
  // nav.addEventListener('click', handleMenuIsActive);

  const boardButtons = document.querySelector('.buttonBox');
  boardButtons.addEventListener('click', handleBoardButton);
};
