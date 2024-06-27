import { Cell } from '../types/Cell';

export function createBoard(row: number, col: number): Cell[][] {
  return Array.from({ length: row }, () => Array.from({ length: col }, () => ''));
}
