import { Coord } from '../types/Coord';
import { Snake } from '../types/Snake';

export function createFood(row: number, col: number, snake: Snake): Coord {
  const board: Coord[] = Array.from({ length: row }, (_, i) => Array.from({ length: col }, (_, j) => [i, j] as Coord))
    .flat()
    .filter(([y, x]) => !snake.some(([sy, sx]) => sy === y && sx === x));

  if (board.length === 0) return [-1, -1];

  return board[Math.floor(Math.random() * board.length)];
}
