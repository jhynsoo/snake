import { Direction } from '../types/Direction';
import { keyToDirection } from './keyToDirection';

export function getNewDirection(oldDirection: Direction, key: string): Direction {
  const newDirection = keyToDirection(key);

  if (!newDirection) return oldDirection;
  if (oldDirection === 'up' && newDirection === 'down') return 'up';
  if (oldDirection === 'down' && newDirection === 'up') return 'down';
  if (oldDirection === 'left' && newDirection === 'right') return 'left';
  if (oldDirection === 'right' && newDirection === 'left') return 'right';

  return newDirection;
}
