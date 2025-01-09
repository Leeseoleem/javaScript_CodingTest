// 재귀 기초
// 첫 번째 문제: 팩토리얼 계산
const fac = (n) => {
  if (n === 1) return 1;
  return n * fac(n - 1);
};

// 두 번째 문제: 피보나치 수열
const fivo = (n) => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return fivo(n - 1) + fivo(n - 2);
}; // 성능 향상을 위한 메모이제이션 추가

// 세 번째 문제: 피보나치 수열 (메모이제이션 적용)
// 메모이제이션: 계산 결과를 저장해 두고, 필요할 때 다시 사용
const fivoMemo = (n, memo = {}) => {
  if (n === 0) return 0; // 기본 조건
  if (n === 1) return 1; // 기본 조건

  if (memo[n]) return memo[n]; // 이미 계산된 값이 있으면 반환

  memo[n] = fivoMemo(n - 1, memo) + fivoMemo(n - 2, memo); // 값 계산 및 저장
  // memo = {} | memo는 빈 객체
  // memo[n]: 키 - 계산중인 치보나치 수 n
  // memo[n] = m: 값 => 특정한 값이 도출되면 저장
  // fivomemo(2) = fivomemo(1) + fivomemo(0) = 1 + 0 = 1
  // 즉, 가장 처음 값이 도출되는 fivomemo(2)부터 저장 시작
  return memo[n];
};

// 네 번째 문제: 계단 오르기 문제 (Dynamic Programming)
// 한 번에 1계단 또는 2계단씩 오를 수 있습니다. 총 n개의 계단이 있을 때, 정상에 도달하는 방법의 수를 구하세요.
// 피보나치 수열과 유사 => 현재 계단(n)에 도달하는 방법 | 직전 계단(n-1)에서 한 계단 올라오는 경우 / 두 계단 아래(n-2)에서 두 계단 올라오는 경우
const ways = (n, memo = {}) => {
  if (n === 1) return 1;
  if (n === 0) return 1;
  if (memo[n]) return memo[n];

  memo[n] = ways(n - 1, memo) + ways(n - 2, memo);
  return memo[n];
};

// 다섯 번째 문제: 집합의 부분 집합 구하기 (Subset Problem)
const sets = (arr) => {
  let all_set = [[]];
  count = Math.pow(2, arr.length); // 부분 집합의 수

  for (let i = 0; i < count; i++) {
    let subset = []; // 비트에 해당하는 값
    for (let j = 0; j < arr.length; j++) {
      // j: 각 요소를 탐색할 인덱스
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    all_set.push(subset);
  }
};

// 실행 과정 예시 (arr = [1, 2, 3])
// i = 5 (101):
// j = 0: 1 << 0 = 1, i & 1 = 1 → arr[0] 선택: subset = [1]
// j = 1: 1 << 1 = 2, i & 2 = 0 → 선택 안 함
// j = 2: 1 << 2 = 4, i & 4 = 4 → arr[2] 선택: subset = [1, 3]

// 여섯 번째 문제: 문자열 내의 모든 순열 생성 (String Permutations)
// 순열이란, 문자열의 문자들을 순서를 바꿔서 만들 수 있는 모든 조합입니다.
const permutation = (str) => {
  if (str.length === 1) return [str]; // 기저 조건 - 재귀 함수가 멈추는 지점
  const arr = []; // 현재 문자열의 순열을 저장
  for (let i = 0; i < str.length; i++) {
    const fir = str[i]; // 현재 순열에서 첫 번째로 고정할 문자
    const others = permutation(str.slice(0, i) + str.slice(i + 1)); // 나머지 문자로 재귀 호출하여 순열 생성

    for (let other of others) {
      // 기저 조건 이후 나머지 순열을 처리
      arr.push(fir + other); // 고정된 문자와 나머지 순열을 합쳐 새로운 조합 생성
    }
  }
  return arr; // 완성된 순열 배열 반환
};

// 문제: 중복을 포함한 순열 생성
// 문자에 중복이 있는 문자열(ex. aas) 입력 시 중복 없는 순열 반환
const doublePermutation = (str) => {
  if (str.length === 1) return [str]; // 기저 조건: 문자열 길이가 1일 때 자기 자신 반환

  const permutation_arr = []; // 순열을 저장하는 배열

  for (let i = 0; i < str.length; i++) {
    const first = str[i]; // 고정할 문자
    const other = str.slice(0, i) + str.slice(i + 1); // 나머지 문자
    const others = doublePermutation(other); // 재귀 호출로 나머지 순열 생성

    for (const other of others) {
      permutation_arr.push(first + other); // 고정 문자와 나머지 순열 결합
    }
  }

  return [...new Set(permutation_arr)]; // 중복 제거 후 반환
};
