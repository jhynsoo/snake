import { expect, test } from 'vitest';
import { createBoard } from './createBoard';

test('Create board test', () => {
  expect(createBoard(3, 2)).toEqual([
    ['', ''],
    ['', ''],
    ['', ''],
  ]);
  expect(createBoard(2, 3)).toEqual([
    ['', '', ''],
    ['', '', ''],
  ]);
});
