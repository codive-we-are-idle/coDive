import { elements } from './dom.js';
import { getDate } from './util.js';

export const rank = {
  bindRankEvent() {
    elements.date.insertAdjacentHTML('beforeend', getDate());
  },

  init() {
    this.bindRankEvent();
  },
};
