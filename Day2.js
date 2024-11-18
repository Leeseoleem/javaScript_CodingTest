// 1. 두 수의 나눗셈
const solution = (num1, num2) => Math.trunc((num1 / num2) * 1000); // trunc() : 정수만 남기는 함수

// 2. 숫자 비교하기
const solution2 = (num1, num2) => (num1 === num2 ? 1 : -1);

// 3. 분수의 덧셈
function solution3(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const getGCD = (a, b) => (a % b ? getGCD(b, a % b) : b);
  const gcd = getGCD(numer, denom);
  return [numer / gcd, denom / gcd];
}

// 유클리드 호제법 - 최대공약수(GCD) 알고리즘
// 두 수 a와 b의 최대공약수는 a%b와 b의 최대공약수와 같다.
// gcd(a,b) = gcd(b,a%b) 에 기반
// 두 수의 a % b = r을 구한다
// r이 0일 경우, 나눈 숫자가 최대공약수가 된다
// 만약 아닐경우 a를 b로, b를 r로 치환(작은 수 => 큰 수, 나머지 =>  작은 수)
// 나머지가 0이 될 때까지 위 과정을 반복

function gcd(a, b) {
  // 두 수 중 하나가 0이 되면 다른 값이 GCD
  while (b !== 0) {
    let r = a % b; // 나머지를 계산
    a = b; // b를 a로 교체
    b = r; // r(나머지)을 b로 교체
  }
  return a; // GCD 반환
}

// 한 줄 작성
const getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2);

// 4. 배열 두 배 만들기

const solution4 = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers;
};

// reduce() - 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환
// arr.reduce(() => {반환 내용})

// 짧은 버전
function solution4_2(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

const solution4_3 = (numbers) => numbers.map((number) => number * 2); // map이 더 맞는듯
