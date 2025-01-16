// 문제 1: 팰린드롬 판별 (재귀)
// 팰린드롬(앞에서 읽으나 뒤에서 읽으나 같은 문자열)
const isPalindrome = (str) => {
  if (str.length <= 1) return true; // 문자열이 비거나 1개가 남을 경우
  return str[0] === str[str.length - 1] // 첫 번째 문자열과 마지막 문자열을 비교
    ? isPalindrome(str.slice(1, -1))
    : false;
};

// 문제 2: 피보나치 수열 계산 (재귀 + 메모이제이션)
const fibonacci = (n, memo = {}) => {
  // memo: 기존의 계산된 값을 저장하는 공간
  if (n === 1) return 1;
  if (n === 0) return 0;
  // if문 리팩토링:  if (n === 0 || n === 1) return n;
  if (memo[n]) return memo[n]; // 저장된 값 불러오기

  // 기본 흐름
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

// 문제 3: 이진수로 변환 (재귀)
const decimalToBinary = (n, memo = []) => {
  let quotient = Math.floor(n / 2); // 몫
  let remainder = Math.floor(n % 2); // 나머지
  if (quotient === 0) return memo.join(""); // 더이상 나눠지지 않는 경우 이진수 반환
  return decimalToBinary(quotient, [remainder, ...memo]);
};

// 문제 4: 조합의 수 계산 (재귀)
// 재귀 = 주어진 n개의 요소 중에서 r개의 요소를 선택하는 방법의 수
// C(n,r) = C(n−1,r−1) + C(n−1,r)
const combination = (n, r) => {
  if (r === 0 || n === r) return 1; // 기저 조건
  return combination(n - 1, r - 1) + combination(n - 1, r);
};

// 문제 4-1: 조합의 수 계산 (재귀, 메모이제이션)
const combination_memo = (n, r, memo = {}) => {
  if (r === 0 || n === r) return 1; // 기저 조건
  if (memo[`${n}, ${r}`]) return memo[`${n}, ${r}`];
  memo[`${n}, ${r}`] =
    combination(n - 1, r - 1, memo) + combination(n - 1, r, memo);
  return memo[`${n}, ${r}`];
};

// 문제 5: 배열에서 최대값과 최소값 구하기 (재귀)
const findMax_switch = (arr) => {
  let max = arr[0]; // 첫 번째 값을 초기 max로 설정
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      // 값 교환
      [arr[0], arr[i]] = [arr[i], arr[0]];
      return findMax(arr); // 배열을 수정한 상태로 재귀 호출
    }
  }
  return max; // 최대값 반환
};
// [문제점]
// 최대값을 찾는 재귀 함수는 배열을 직접 변형하지 않는 것이 일반적
// max = -Infinity 사용 | -Infinity: 무한히 작은 값
// 권장 코드
const findMax = (arr, idx = 0, max = -Infinity) => {
  if (idx === arr.length) return max;
  if (arr[idx] > max) max = arr[idx];
  return findMax(arr, idx + 1, max);
};

// 문제 6: 배열의 요소 합 구하기 (재귀)
// 주어진 배열의 모든 요소의 합을 재귀를 사용하여 구하세요. 반복문은 사용하지 않습니다.
const sumArray = (arr, idx = 0, total = 0) => {
  if (idx === arr.length) return total; // 기저 조건
  total = arr[idx] + total;
  return sumArray(arr, idx + 1, total);
};

// 문제 7: 문자열 뒤집기 (재귀)
// 주어진 문자열을 재귀를 사용하여 뒤집는 함수를 작성하세요. 반복문은 사용하지 않습니다.
const reverseString_idx = (str, idx = 0, restr = "") => {
  if (idx === str.length) return restr; // 기저 조건
  return reverseString(str, idx + 1, str[idx] + restr);
};
// 개선 사항: 문자열의 앞뒤를 잘라서 재귀적으로 처리
const reverseString = (str) => {
  if (str === "") return ""; // 기저 조건: 빈 문자열 반환
  return reverseString(str.slice(1)) + str[0]; // 나머지 문자열을 뒤집고 첫 글자를 추가
};

// 문제 8: 배열에서 중복 요소 제거 (재귀)
const removeDuplicates = (arr, result = []) => {
  if (arr.length === 0) return result; // 배열을 전부 비교하였다면 결과값 전송
  // 배열 비구조화 할당: 배열을 분해하여 개별 변수화
  const [head, ...tail] = arr;
  if (!result.includes(head)) {
    // 결과값에 해당 값이 없는 경우
    result.push(head); // 추가
  }
  return removeDuplicates(tail, result);
};

// 문제 9: 괄호 문자열의 유효성 검사 (재귀)
// 주어진 문자열이 올바른 괄호 문자열인지 재귀를 사용하여 확인
// [조건]
// 괄호가 열리면 반드시 닫혀야 합니다.
// 닫히는 괄호는 열리는 괄호보다 먼저 나올 수 없습니다.
const isValidParentheses = (str, open = 0) => {
  if (open < 0) return false; // 닫는 괄호가 더 많아지는 경우
  if (str === "") return open === 0; // 문자열이 끝났을 때 열려 있는 괄호가 없으면 true

  const first = str[0]; // 현재 문자
  const other = str.slice(1); // 나머지 문자열
  open = first === "(" ? open + 1 : open - 1; // 여는 괄호는 +1, 닫는 괄호는 -1

  return isValidParentheses(other, open); // 재귀 호출
};

// 문제 10: 배열에서 부분 합 찾기 (재귀)
// 주어진 배열과 정수 target이 주어졌을 때, 배열의 요소 중 일부를 선택하여 합이 target과 같은 부분 배열이 존재하는지 재귀를 사용하여 확인하세요.
const canSum = (target, arr, memo = {}) => {
  for (let num of arr) {
    const remainder = target - num; // target에서 현재 배열의 값 제외
    if (canSum(remainder, arr, memo)) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

// 문제 10-1: 문제 1: 최소 동전 개수 찾기 (재귀 + 메모이제이션)
// 주어진 동전 배열에서 동전을 최소한으로 사용하여 특정 금액을 만들고 싶습니다. 사용해야 할 동전의 최소 개수를 구하세요.
const coinChange = (coins, amount, memo = {}) => {
  if (amount === 0) return 0; // 조건이 0원일 경우 동전 개수는 0
  if (amount < 0) return Infinity; // 금액이 음수면 불가능

  if (amount in memo) return memo[amount]; // 이미 계산된 결과 반환

  let minCoins = Infinity; // 가장 적게 사용된 동전 개수 저장
  for (let coin of coins) {
    const result = coinChange(coins, amount - coin, memo); // 재귀 호출
    minCoins = Math.min(minCoins, result + 1); // 최소값 계산
  }

  memo[amount] = minCoins; // 메모이제이션 저장
  return memo[amount];
};

// 최종 결과에서 Infinity를 -1로 변환
const getCoinChangeResult = (coins, amount) => {
  const result = coinChange(coins, amount);
  return result === Infinity ? -1 : result;
};

// 테스트
console.log(getCoinChangeResult([1, 2, 5], 11)); // 3 (5 + 5 + 1)
console.log(getCoinChangeResult([2], 3)); // -1
console.log(getCoinChangeResult([1], 0)); // 0
console.log(getCoinChangeResult([186, 419, 83, 408], 6249)); // 효율적으로 계산 가능

// 문제 10-2: 문자열에서 중복 문자 제거
const removeDuplicateChars = (str) => {
  const new_str = [...new Set(str.split(""))];
  return new_str.join("");
};
