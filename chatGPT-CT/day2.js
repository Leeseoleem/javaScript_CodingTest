// 문제 1: 문자열 뒤집기
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// 문제 2: 회문 검사 (Palindrome Check)
// 회문은 앞뒤가 똑같은 문자열을 뜻합니다. (대소문자를 구분하지 않으며, 공백과 특수문자는 무시합니다.)
const isPalindrome_1 = (str) => {
  let re_str = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() === re_str;
}; // 공백 및 특수 문자를 없애는 로직 추가하기
// 수정 코드

const isPalindrome = (str) => {
  let cleanUp = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let re_str = cleanUp.split("").reverse().join("");
  return cleanUp === re_str;
};

// 문제 3: 가장 긴 공통 접두사 찾기 (Longest Common Prefix)
// 배열의 첫 번째 값을 접두사로 설정 => 배열의 값과 비교하며 삭제
// if와 while의 차이 생각하기: if- 조건이 참 일 때 한 번 실행 | while: 조건이 참 일 동안 계속 실행
const longestCommonPrefix = (arr) => {
  if (arr.length === 0) return ""; // 빈 배열 처리
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

// 문제 4: 배열 내 숫자 조합으로 가장 큰 수 만들기
const largestNumber = (arr) => {
  if (arr.length === 0) return ""; // 빈 배열 처리
  if (arr.every((a) => a === 0)) return "0"; // every() 로 0인 경우 처리
  let sort_arr = arr.sort().reverse();
  return sort_arr.sort(
    (a, b) => a.toString() + b.toString() - (b.toString() + a.toString())
  ); // sort()
}; // 모든 배열의 값이 0인 경우 처리 필요

// localeCompare(): 두 문자열을 특정 규칙에 따라 비교 정렬
// string1.localeCompare(string2, [locales], [options])
// string2: string1과 비교할 문자열
// locales: 선택할 언어(ex. en, ko)
// options: { sensitivity : "조건" } => 특정 조건 부여
const fruits = ["Apple", "orange", "Banana"];
console.log(fruits.sort((a, b) => a.localeCompare(b)));
// ["Apple", "Banana", "orange"]

// 문제 5: 배열 중복 제거
// set 사용해보기 => 중복 값 제거, 객체로 반환: {}
// set 심화 정리해보기
const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

// 문제 6: 배열 회전 (Rotate Array)
const rotateArray = (arr, n) => {
  if (arr.length === 0) return [];
  n = n % arr.length;
  return arr.slice(-n).concat(arr.slice(0, -n));
  // slice(-n): 배열의 끝에서 n개를 가져옴
  // arr.slice(0, -n): 배열의 앞부분(끝에서 n개를 제외한 부분)을 가져옴
};

// 문제 7: 배열의 모든 조합 만들기 (Generate All Subsets)
// 주어진 배열에서 모든 **부분집합(subset)**을 생성하는 함수를 작성하세요.
// 비트 마스크 사용: n개의 배열에 대한 부분 집합은 2^n개
// Math.pow(a, b): a의 b승을 반환- a^b
// 비트 이동 연산자| i << j: i의 비트를 왼쪽으로 j번 이동 => 이동한 만큼 빈 자리는 부호 비트로 채워짐
// 예시- console.log((1 << 3).toString(2)); // "1000" (1을 왼쪽으로 3칸 이동)
const generateSubsets = (arr) => {
  const allset = []; // 모든 부분 집합을 저장하는 배열
  const total = Math.pow(2, arr.length()); // 배열의 모든 부분 집합의 수

  for (let i = 0; i < total; i++) {
    // 부분 집합의 수 만큼 반복
    const subset = []; // 부분 집합 제작-> j번 반복 이후 초기화

    for (let j = 0; j < total; j++) {
      if (i & (1 << j)) {
        // & 연산자: 두 비트 모두 1이면 1
        // 만약 i의 이진수 값의 j번째에 1이 있다면
        subset.push(arr[i]); // 값을 저장
      }
    }
    allset.push(subset);
  }
};

// 재귀 함수 기초
// 문제 1: 팩토리얼 계산
const factorial = (n) => {
  const mul = (n) => {
    if (n === 0) return 0;
    return n * mul(n - 1);
  };
  return mul(n);
};

// 문제: 피보나치 수열 계산
const fibonacci_ㅔㄱㄷ = (n) => {
  const fib = (n) => {
    if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }
    return fib(n - 1) + fib(n - 2);
  };
  return fib(n);
}; // 내부 함수 없어도 됨

// 개선 코드 1
const fibonacci = (n) => {
  if (n === 0) return 0; // F(0) = 0
  if (n === 1) return 1; // F(1) = 1

  // F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 개선 코드 2: 메모이제이션 => 재귀 함수에서 주로 사용
// 기존의 값을 저장 -> 추후 다시 사용
