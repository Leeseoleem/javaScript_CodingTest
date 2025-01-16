// 문제 2: 피보나치 수열 계산 (재귀 + 메모이제이션)
const fibonacci = (n, memo = {}) => {
  if ((n === 0) | (n === 1)) return n; // 기저 조건
  if (memo[n]) return memo[n]; // 메모에 값이 저장된 경우
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

// 문제 3: 이진수로 변환 (재귀)
const decimalToBinary = (n, memo = []) => {
  let quotient = Math.floor(n / 2);
  let remainder = Math.floor(n % 2);
  if (remainder === 0) return memo.join("");
  return decimalToBinary(quotient, [remainder, ...memo]);
};
