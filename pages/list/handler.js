import { toggleBoardTabClass } from './dom.js';
import { renderPage } from "../../router.js";

export const handleButtonActive = e => {
  const button = e.target.closest('button');
  if (button) {
    toggleBoardTabClass(button.id);
  }
};

export const handleListItem = e => {
  console.log(e.target.closest('li'));
};

export const handleWriteButton = e => {
  const writeBtn = e.target.closest('#write-button');
  if(writeBtn){
    e.preventDefault();
      renderPage('/write'); 
  }
}