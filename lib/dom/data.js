import { apiService } from '../api/service.js';
import { sortRaking } from '../utils/calc.js';
import { renderBoard, renderRank } from './render.js';

export const setRankData = async endpoint => {
  const response = await apiService.get(endpoint);
  renderRank(sortRaking(response), endpoint);
};

export const setBoardDataList = async endpoint => {
  const response = await apiService.get(endpoint);
  renderBoard(response);
};
