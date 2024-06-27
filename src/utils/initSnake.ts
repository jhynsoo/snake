import { Snake } from '../types/Snake';

export function initSnake(col: number, init = 2): Snake {
  const y = Math.floor(col / 2);

  return [...Array(init)].map((_, i) => [y, 1 + i]).reverse() as Snake;
}
