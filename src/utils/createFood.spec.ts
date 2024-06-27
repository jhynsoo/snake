import { describe, expect, test } from 'vitest';
import { createFood } from './createFood';

describe('Create food test', () => {
  test('Normal case', () => {
    expect(createFood(1, 1, [])).toEqual([0, 0]);
  });
  test('Long snake', { retry: 3 }, () => {
    expect(
      createFood(3, 3, [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
      ])
    ).toEqual([1, 1]);
  });
  test('Snake takes up all space', { retry: 3 }, () => {
    expect(
      createFood(3, 3, [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
        [1, 1],
      ])
    ).toEqual([-1, -1]);
  });
});
