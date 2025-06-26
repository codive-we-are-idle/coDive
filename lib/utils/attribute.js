import { getNode } from '../utils/getNode.js';

export const addClass = (target, className) => {
  if (typeof target === 'string') target = getNode(target);

  target.classList.add(className);
};
export const removeClass = (target, className) => {
  if (typeof target === 'string') target = getNode(target);
  target.classList.remove(className);
};
