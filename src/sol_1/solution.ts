export function solution(s: string) {
  const stack: string[] = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      const lastChar = stack.pop();

      if (
        (char === ')' && lastChar !== '(') ||
        (char === '}' && lastChar !== '{') ||
        (char === ']' && lastChar !== '[')
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(solution('()')); // true
console.log(solution('()[]{}')); // true
console.log(solution('(]')); // false
console.log(solution('([)]')); // false
console.log(solution('{[]}')); // true
