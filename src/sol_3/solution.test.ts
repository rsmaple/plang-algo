import { describe, expect, it } from 'vitest';
import { solution } from './solution';

describe('sol_3', () => {
  it('[1,2,2,1] & [2,2] -> [2]', () => {
    expect(solution([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  it('[4,9,5] & [9,4,9,8,4] -> [4,9]', () => {
    expect(solution([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
});
