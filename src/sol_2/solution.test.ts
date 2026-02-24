import { describe, expect, it } from 'vitest';
import { solution } from './solution';

describe('sol_2', () => {
  it('"abcabcbb" -> 3', () => {
    expect(solution('abcabcbb')).toBe(3);
  });

  it('"bbbbb" -> 1', () => {
    expect(solution('bbbbb')).toBe(1);
  });

  it('"pwwkew" -> 3', () => {
    expect(solution('pwwkew')).toBe(3);
  });
});
