export function solution(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const intersection = [...set1].filter((num) => set2.has(num));
  return intersection;
}

console.log(solution([1, 2, 2, 1], [2, 2])); // [2]
console.log(solution([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
