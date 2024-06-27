import { GameInfo } from '../types/GameInfo';
import { createBoard } from './createBoard';
import { updateSnakeAndFood } from './updateSnakeAndFood';

export function updateBoard(info: GameInfo): boolean {
  if (!updateSnakeAndFood(info)) return false;

  const row = info.board.length;
  const col = info.board[0].length;
  const newBoard = createBoard(row, col);

  newBoard[info.food[0]][info.food[1]] = 'f';
  info.snake.forEach(([x, y]) => {
    newBoard[x][y] = 's';
  });
  info.board = newBoard;

  return true;
}
