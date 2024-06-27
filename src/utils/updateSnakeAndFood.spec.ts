import { describe, expect, test } from 'vitest';
import { updateSnakeAndFood } from './updateSnakeAndFood';

describe('Update snake test', () => {
  test('Valid case', () => {
    expect(
      updateSnakeAndFood({
        board: [
          ['', '', ''],
          ['s', 's', 'f'],
          ['', '', ''],
        ],
        snake: [
          [1, 1],
          [1, 0],
        ],
        food: [1, 2],
        direction: 'right',
        nextDirection: 'right',
      })
    ).toBe(true);
  });
  test('Invalid case', () => {
    expect(
      updateSnakeAndFood({
        board: [
          ['', 's', 's'],
          ['s', 's', 's'],
          ['', '', 'f'],
        ],
        snake: [
          [0, 1],
          [0, 2],
          [1, 2],
          [1, 1],
          [1, 0],
        ],
        food: [2, 2],
        direction: 'down',
        nextDirection: 'down',
      })
    ).toBe(false);
    expect(
      updateSnakeAndFood({
        board: [
          ['', '', ''],
          ['s', 's', 's'],
          ['', '', 'f'],
        ],
        snake: [
          [1, 2],
          [1, 1],
          [1, 0],
        ],
        food: [2, 2],
        direction: 'right',
        nextDirection: 'right',
      })
    ).toBe(false);
    expect(
      updateSnakeAndFood({
        board: [
          ['', '', ''],
          ['s', 's', 's'],
          ['', '', 'f'],
        ],
        snake: [
          [1, 2],
          [1, 1],
          [1, 0],
        ],
        food: [2, 2],
        direction: 'left',
        nextDirection: 'left',
      })
    ).toBe(false);
  });
});
