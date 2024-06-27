import { GameInfo } from '../types/GameInfo';
import { Snake } from '../types/Snake';
import { createFood } from './createFood';

export function updateSnakeAndFood(info: GameInfo) {
  const row = info.board.length;
  const col = info.board[0].length;
  const head = [...info.snake[0]];
  const eaten = head[0] === info.food[0] && head[1] === info.food[1];

  switch (info.nextDirection) {
    case 'up':
      head[0] -= 1;
      break;
    case 'down':
      head[0] += 1;
      break;
    case 'left':
      head[1] -= 1;
      break;
    case 'right':
      head[1] += 1;
      break;
  }

  if (
    head[0] < 0 ||
    head[0] >= row ||
    head[1] < 0 ||
    head[1] >= col ||
    info.snake.slice(1).some(([x, y]) => x === head[0] && y === head[1])
  ) {
    return false;
  }
  const newSnake = (eaten ? [head, ...info.snake] : [head, ...info.snake.slice(0, -1)]) as Snake;

  info.direction = info.nextDirection;
  info.snake = newSnake;
  if (eaten) {
    info.food = createFood(row, col, newSnake);
  }

  return true;
}
