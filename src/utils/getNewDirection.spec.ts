import { describe, expect, test } from 'vitest';
import { getNewDirection } from './getNewDirection';

describe('Get new direction of snake test', () => {
  test('Invalid input', () => {
    expect(getNewDirection('up', 'ArrowDown')).toBe('up');
    expect(getNewDirection('down', 'ArrowUp')).toBe('down');
    expect(getNewDirection('left', 'ArrowRight')).toBe('left');
    expect(getNewDirection('right', 'ArrowLeft')).toBe('right');
  });
  test('Invalid key', () => {
    expect(getNewDirection('up', 'd')).toBe('up');
    expect(getNewDirection('down', 'space')).toBe('down');
  });
  test('Valid input', () => {
    expect(getNewDirection('up', 'ArrowLeft')).toBe('left');
    expect(getNewDirection('down', 'ArrowRight')).toBe('right');
    expect(getNewDirection('left', 'ArrowDown')).toBe('down');
    expect(getNewDirection('right', 'ArrowUp')).toBe('up');
  });
});
