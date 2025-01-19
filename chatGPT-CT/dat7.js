// 문자열 패턴 익히기
// 도전 과제 1: 회문 판별하기
const isPalindrome = (str) => {
  let mean = str
    .toLowerCase() // 소문자로 변경
    .replace(/[^a-z]/g, "") // 정규식
    .split(""); // 배열로 생성
  return mean.join("") === mean.reverse().join("");
};

// 도전 과제 2: 중복 문자 제거
const removeDuplicates = (str) => {
  let word = [...new Set(str.split(""))]; // set: 중복 값 제거 + 스프레드 연산자로 값을 뿌려 배열에 저장
  return word.join(""); // join을 통해 배열을 문자열로 변환
};

// 도전 과제 3: 가장 긴 공통 접두사 찾기
const longestCommonPrefix = (strs) => {
  let prefix = strs[0]; // 첫 번째 문자열을 접두사로 설정
  for (let str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

// 도전 과제 4: 특정 패턴 찾기
const countPatternOccurrences = (text, pattern) => {
  // 힌트 필요
};
