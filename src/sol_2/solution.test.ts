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

  it('"" -> 0', () => {
    expect(solution('')).toBe(0);
  });

  it('"a" -> 1', () => {
    expect(solution('a')).toBe(1);
  });

  it('"abcdef" -> 6', () => {
    expect(solution('abcdef')).toBe(6);
  });

  it('"aabbcc" -> 2', () => {
    expect(solution('aabbcc')).toBe(2);
  });

  it('"a b c" -> 3', () => {
    expect(solution('a b c')).toBe(3);
  });

  it('"a1b2c3" -> 6', () => {
    expect(solution('a1b2c3')).toBe(6);
  });

  it('"abababab" -> 2', () => {
    expect(solution('abababab')).toBe(2);
  });
});
