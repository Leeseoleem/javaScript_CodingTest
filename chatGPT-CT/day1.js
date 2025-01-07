// 1번 문제: 짝수/홀수 판단
const checkNum = (a) => {
  return a % 2 === 0 ? "짝수" : "홀수";
};

// 2-1번 문제: 1부터 100까지 3의 배수 출력
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
} // 전역 변수 i는 for문 안에서만 사용
// 수정 코드: i를 3씩 증가
for (let i = 3; i <= 100; i += 3) {
  console.log(i);
}

// 2-2번 문제: 문자열 길이가 4 이상인 단어 출력
const words = ["apple", "car", "banana", "sky", "notebook"];
const checkWords = () => {
  for (const word of words) {
    if (word.length >= 4) {
      console.log(word);
    }
  }
}; // filter 매서드 사용해 간결화 하기
// filter(): 배열의 각 요소들 중 원하는 조건에 맞는 요소로만 필터링
// 수정 코드
const checkWords2 = (words) => {
  return words.filter((word) => word.length >= 4);
};

// 3-1번 문제: 1부터 N까지 합 계산
const sumNum = (a) => {
  let i = 0;
  for (j = 0; j <= a; j++) {
    i += j;
  }
  console.log(i);
}; // 반복문 대신 수학 공식 사용하기
// 수정 함수
const sumNum2 = (n) => {
  console.log(n * (n + 1));
};

// 3-2번 문제: 배열에서 최대값 찾기
const numbers = [10, 5, 8, 30, 2];
const biggest = (numbers) => {
  let top = 0;
  for (number of numbers) {
    if (top < number) {
      top = number;
    }
  }
  console.log(top);
}; // js의 MAth.max() 사용해보기 | for문 안의 변수는 let 키워드로 선언하기
// Math.max(): 매게변수로 주어진 숫자 중 가장 큰 수 반환
// 수정 코드
const biggest2 = (numbers) => {
  console.log(Math.max(...numbers));
};

// 3-3번 문제: 구구단 출력
for (i = 1; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(i, "*", j, "=", i * j);
  }
} // 전역 변수 대신 let 키워드 사용하여 변수 선언하기 | 출력 포멧 정리
// 수정 코드
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 4번 문제: 숫자 뒤집기
const reverseNum = (a) => {
  let str_a = a.toString();
  let change_a = "";
  for (a of str_a) {
    change_a = a + change_a;
  }
  console.log(change_a);
}; // 배열 관련 매서드를 사용하여 코드 간결화하기
// 수정 코드
const reverseNum2 = (n) => {
  console.log(Number(a.toString().split("").reverse().join("")));
};
// toString(): 숫자 =>  문자열 변환
// Number(): 문자열 =>  숫자 변환
// split(): 문자열을 () 내부 기준으로 분류하여 배열 생성 => "" :  빈 문자열 기준
// reverse(): 배열 뒤집기
// join(): 배열 내 값을 합쳐 문자열로 반환

// 문제 1: 특정 문자 뒤집기(어려움)
// 위치 표시자(포인터)를 사용하는 알고리즘
// 첫 번째 포인터: 문자열의 시작
// 두 번째 포인터: 문자열의 끝
// 정규식을 사용하여 문자를 판단 =>  정규식.test(str): 정규식과 인자가 일치하는지 확인
const reverseEng = (str) => {
  const arr = str.split(""); // 문자열 => 배열 전환
  let start = 0; // 문자열 시작
  let end = str.length - 1; // 문자열 끝
  const eng = /[a-z]/i; // 정규식: [a-z] - a 부터 z까지 | i: 대소문자 구분 없이

  while (start < end) {
    if (!eng.test(arr[start])) {
      start++;
    } else if (!eng.test(arr[end])) {
      end--;
    } else {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // 구조 분해 할당
      start++;
      end--;
    }
  }

  return arr.join("");
};

// 문제 2: 배열 뒤집기 - 숫자 배열
const rvNum = (nums) => {
  return nums.reverse();
}; // reverse()의 경우 원본 배열 자체를 변환해버리니 ... 사용

// 문제 3: 팰린드롬 확인
const checkPal = (num) => {
  let r_num = Number(num.toString().split("").reverse().join(""));
  return num === r_num;
};

// 마지막 문제: 알파벳 그룹 뒤집기
// 정규식 사용: /[a-zA-Z]+/g: 연속된 알파벳 그룹 찾음
// str.match(정규식): 정규식에 일치하는 부분을 찾아 배열로 반환
const reEngGroup = (str) => {
  let pattern = /[a-zA-Z]+/g; // +: 문자의 반복 | g: 문자열 내 모든 패턴 검출
  const matches = str
    .match(pattern)
    .map((match) => match.split("").reverse().join(""));
  // replace(a, b): 정규식에 맞는 각 그룹을 교체 | a: 교체할 내용(문자열 혹은 정규식),  b: 교체될 문자열 혹은 콜백 함수
  // shift(): 배열에서 첫 번째 값을 꺼낸 후 반환(배열 내에서 제거)
  return str.replace(pattern, () => matches.shift());
};
