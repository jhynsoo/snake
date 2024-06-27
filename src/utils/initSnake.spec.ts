import { expect, test } from 'vitest';
import { initSnake } from './initSnake';

test('Snake position initialization test', () => {
  expect(initSnake(5, 3)).toEqual([
    [2, 3],
    [2, 2],
    [2, 1],
  ]);
  expect(initSnake(6, 4)).toEqual([
    [3, 4],
    [3, 3],
    [3, 2],
    [3, 1],
  ]);
  expect(initSnake(6)).toEqual([
    [3, 2],
    [3, 1],
  ]);
});
