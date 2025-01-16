// 학습 계획
// 3 ~ 7 수준의 난이도로 문제를 풀며 익숙해지는 것을 목표

// 문제 1: 팩토리얼 계산 (난이도 3)
const factorial = (n) => {
  if (n === 0) return 1; // 기저 조건
  return n * factorial(n - 1);
};

// 문제 2: 피보나치 수열 계산 (난이도 4)
// 메모 X 버전
const fibonacci = (n) => {
  if (n === 1 || n === 0) return n;
  return fibonacci(n - 1) * fibonacci(n - 2);
};

// 메모 o 버전
const fibonacci_memo = (n, memo = {}) => {
  if (n === 1 || n === 0) return n; // 기저 조건
  if (memo[n]) return memo[n]; // 메모에 값이 저장된 경우 그 값을 활용
  memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo);
  return memo[n];
};

// [메모이제이션 연습이 가능한 문제들]
// 계단 오르기 (난이도 4)
// 당신은 n개의 계단이 있는 계단을 오르고 있습니다.
// 한 번에 1계단 또는 2계단을 오를 수 있습니다.
// 계단 꼭대기에 도달하는 모든 가능한 방법의 수를 구하세요.
const climbStairs = (n, memo = {}) => {
  if (n === 0 || n === 1) return 1;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

// 문제: 최소 동전 개수 (난이도 5)
const minCoins = (coins, amount, memo = {}) => {
  // 1. 기저 조건
  if (amount === 0) return 0; // 금액 0일 때 동전 개수는 0

  // 2. 메모이제이션 확인
  if (memo[amount]) return memo[amount];

  // 3. 최소 동전 개수 계산
  let minCount = Infinity; // 최솟값을 찾기 위해 초기값 설정

  for (let coin of coins) {
    const remainingAmount = amount - coin;
    if (remainingAmount >= 0) {
      // 음수 조건을 호출 전에 필터링
      const result = minCoins(coins, remainingAmount, memo);
      if (result >= 0) {
        // 유효한 값만 고려
        minCount = Math.min(minCount, result + 1); // 현재 동전 추가
      }
    }
  }

  // 4. 결과 저장 및 반환
  memo[amount] = minCount === Infinity ? -1 : minCount;
  return memo[amount];
};

// 문제: 고유 경로 (Unique Paths)
// 로봇이 𝑚 × 𝑛 격자의 왼쪽 위에서 오른쪽 아래로 이동하려고 합니다.
// 로봇은 한 번에 오른쪽 또는 아래로만 이동할 수 있습니다.
// 격자의 크기 m x n 이 주어졌을 때, 로봇이 이동할 수 있는 고유 경로의 수를 구하세요.
const uniquePaths = (m, n, memo = {}) => {
  if (m === 1 || n === 1) return 1; // 도착
  if (m < 1 || n < 1) return 0; // 잘못된 경로
  coordinate = `${n}, ${m}`;
  if (memo[coordinate]) return memo[coordinate];
  const pathsFromTop = uniquePaths(m - 1, n, memo); // 위쪽에서 오는 경로
  const pathsFromLeft = uniquePaths(m, n - 1, memo); // 아래쪽에서 오는 경로
  memo[coordinate] = pathsFromTop + pathsFromLeft;
  return memo[coordinate];
};

// 문제: 삼각형 최소 경로 합 (Triangle Minimum Path Sum)
const minimumTotal = (triangle, row = 0, col = 0, memo = {}) => {
  // 여기에 코드를 작성하세요.
  const key = `${row}, ${col}`;
  const value = triangle[row][col]; // 현재 위치의 값(배열의 수)
  if (row === triangle.length - 1) return value; // 최하위층에 도달한 경우 값을 반환(기저 조건)
  if (memo[key]) return memo[key];

  const pathDown = minimumTotal(triangle, row + 1, col, memo); // 아래로 이동
  const pathLeft = minimumTotal(triangle, row + 1, col + 1, memo); // 오른쪽 아래로 이동
  memo[key] = value + Math.min(pathDown, pathLeft); // 현재 값과 더 작은 값을 더함
  return memo[key];
};

// 문제: 집 도둑 (House Robber)
const rob = (houses, index = houses.length - 1, memo = {}) => {
  if (index < 0) return 0; // 모든 집을 다 턴 경우 0 반환
  if (memo[index]) return memo[index];
  const check = houses[index] + rob(houses, index - 2, memo); // 현재 인덱스 털기
  const pass = rob(houses, index - 1, memo); // 현재 인덱스 넘어가기
  memo[index] = Math.max(check, pass);
  return memo[index];
};
