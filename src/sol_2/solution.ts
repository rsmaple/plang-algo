export function solution(s: string) {
  const charSet = new Set<string>();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(solution('abcabcbb')); // 3 ("abc")
console.log(solution('bbbbb')); // 1 ("b")
console.log(solution('pwwkew')); // 3 ("wke")
console.log(solution('')); // 0
