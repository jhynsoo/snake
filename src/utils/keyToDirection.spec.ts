import { describe, expect, test } from 'vitest';
import { keyToDirection } from './keyToDirection';

describe('Key to direction test', () => {
  test('Valid keys', () => {
    expect(keyToDirection('ArrowUp')).toBe('up');
    expect(keyToDirection('ArrowDown')).toBe('down');
    expect(keyToDirection('ArrowLeft')).toBe('left');
    expect(keyToDirection('ArrowRight')).toBe('right');
  });
  test('Invalid keys', () => {
    expect(keyToDirection('ArrowUp1')).toBe(null);
    expect(keyToDirection('space')).toBe(null);
  });
});
