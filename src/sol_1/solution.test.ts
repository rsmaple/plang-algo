import { describe, expect, it } from 'vitest';
import { solution } from './solution';

describe('sol_1', () => {
  it('"()" -> true', () => {
    expect(solution('()')).toBe(true);
  });

  it('"()[]{}" -> true', () => {
    expect(solution('()[]{}')).toBe(true);
  });

  it('"(]" -> false', () => {
    expect(solution('(]')).toBe(false);
  });

  it('"([)]" -> false', () => {
    expect(solution('([)]')).toBe(false);
  });

  it('"{[]}" -> true', () => {
    expect(solution('{[]}')).toBe(true);
  });
});
