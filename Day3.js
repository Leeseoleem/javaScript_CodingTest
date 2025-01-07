// 나머지 구하기
const solution = (num1, num2) => num1 % num2;

// 중앙값 구하기
function solution2(array) {
  return array.sort((a, b) => a - b)[Math.ceil(array.length / 2) - 1]; // 오름차순 정렬 // 중앙값 오름차순 -1 => 짝수 대비
}

// 배열 정리 함수
testArray = [6, 55, 15, 7, 88, 27];
// 기본: 오름차순 - 모든 요소를 문자열 취급 => 숫자 정렬 시 값 비교 필요
testArray.sort(); // 오류 발생
testArray.sort((a, b) => a - b); // 숫자 오름차순 정렬
testArray.sort((a, b) => b - a); // 숫자 내림차순 정렬

// 최빈값 구하기
const solution3 = (array) => {
  const newArray = array.reduce((arr, item) => {
    arr[item] = (arr[item] || 0) + 1;
    return arr;
  }, {});
  const count = Math.max(...Object.values(newArray));
};

// 배열 내 중복값 제거: new Set
newArray = [...new Set(array)];

// 배열 간 빼기: filter(), includes() 사용
// includes(): 배열에 특정 요소가 포함되어 있는지
array.filter((item) => !newArray.includes(item)); // newArray에 포함되지 않는 값만 추출

// indexOf(): 특정 값의 첫 번째 인덱스 추출 - 중복 찾기 유용
// reduce():
