// Day 1
// 1. 두수의 합
function solution(num1, num2) {
  return num1 + num2;
}

// 짧은 풀이
const solution = (num1, num2) => {
  num1 + num2;
};

// 2. 두수의 차
const solution = (num1, num2) => num1 - num2;

// 3. 두수의 곱
const solution = (num1, num2) => num1 * num2;

// 4. 몫 구하기
const solution = (num1, num2) => Math.ceil(num1 / num2); // 몫 올림
const solution = (num1, num2) => Math.floor(num1 / num2); // 몫 내림
const solution = (num1, num2) => Math.trunc(num1 / num2); // 몫 정수 반환(소수점 제거)
const solution = (num1, num2) => Math.round(num1 / num2); //몫 반올림

// 더 알아볼 내용
// Math.random(): 0보다 크거나 1보다 작은 부동 소수점 의사 난수를 반환
console.log(Math.random());

// 활용 예시: 1부터 10까지의 랜덤 정수 생성
const min = 1;
const max = 10;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
//floor 함수를 통해 소수점 버림 =>  정수 반환, 최소값을 더해주는 과정을 통해 최솟값 보정(최솟값 미만이 나오는 상황 방지)
console.log(randomInt);

// 활용 예시: 배열에서 랜덤 요소 추출
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const randomIndex = Math.floor(Math.random() * fruits.length);
console.log(fruits[randomIndex]);
