// 문제 1: 숫자 배열의 모든 조합 구하기(재귀)
const getAllSubsets = (arr, idx = 0, currentSubset = []) => {
  // 1. 종료 조건: 배열의 끝에 도달했을 때 현재 부분집합 반환
  if (idx === arr.length) return [currentSubset];

  // 2. 현재 요소를 포함하지 않는 경우
  const exclude = getAllSubsets(arr, idx + 1, currentSubset);

  // 3. 현재 요소를 포함하는 경우
  const include = getAllSubsets(arr, idx + 1, [...currentSubset, arr[idx]]);

  // 4. 두 경우를 합쳐서 반환
  return [...exclude, ...include];
};

// 문제: 문자열의 모든 순열 구하기
const getAllPermutations = (str) => {
  if (str.length === 1) return str;
  const strSet = []; // str의 순열을 저장하는 배열
  for (let i = 0; i < str.length; i++) {
    let first = str[i]; // 첫 번째 고정
    let others = getAllPermutations(str.slice(0, i) + str.slice(i + 1)); // 나머지 문자열로 결합된 배열을 반환 => 배열인 이유: strSet에 저장하기 때문
    for (let other of others) {
      // 나머지 문자열 배열을 순회하면서
      strSet.push(first + other); // 순열을 생성
    }
  }
  return strSet;
}; // 모든 문자열을 저장하기 때문에, 메모리 과부화 문제 발생

// 문제: 문자열의 모든 순열 구하기- 백트래킹(추후 다시)
const getAllPermutations2 = (str) => {
  const result = []; // 모든 순열을 저장할 배열
  const chars = str.split(""); // 문자열을 한 글자씩 나눈 배열로 변환 (예: "abc" -> ['a', 'b', 'c'])

  const permute = (start) => {
    // 1. 재귀 종료 조건: 시작 위치가 배열의 마지막 위치일 때
    if (start === chars.length - 1) {
      result.push(chars.join("")); // 배열을 문자열로 만들어 저장
      return;
    }

    // 2. 현재 위치부터 끝까지 문자를 바꾸며 순열 생성
    for (let i = start; i < chars.length; i++) {
      // (1) 현재 문자와 다른 문자 교환
      [chars[start], chars[i]] = [chars[i], chars[start]];

      // (2) 다음 문자부터 순열을 계속 만듦 (재귀 호출)
      permute(start + 1);

      // (3) 원래 상태로 복구 (백트래킹)
      [chars[start], chars[i]] = [chars[i], chars[start]];
    }
  };

  permute(0); // 순열 생성 시작
  return result;
};

// [백트래킹 연습]
// 문제: N개의 숫자 중 M개를 고르는 모든 조합
const getCombinations = (n, m) => {
  let result = [];
  const back = (start, set) => {
    if (set.length === m) {
      result.push([...set]);
      return;
    }
    for (let i = start; i < n; i++) {
      set.push(i); // 첫 번째 숫자 넣음
      back(start + 1, set);
      set.pop(); // result 저장 후 배열 초기화
    }
  };
  back(1, []);
  return result;
};

// 문제: 부분집합 구하기 (Subset Generation)
const getSubsets = (nums) => {
  const result = [];
  const backtrack = (start, subset) => {
    result.push([...subset]); // 현재까지 부분 집합을 저장(최종)

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  };
  backtrack(0, []);
  return result;
};

// 문제: 숫자 배열의 부분집합 합이 특정 값이 되는 경우 찾기
const subsetSum = (nums, target) => {
  const result = [];
  const backtrack = (start, subset, sum) => {
    if (sum === target) {
      result.push([...subset]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      backtrack(i + 1, subset, nums[i] + sum);
      subset.pop();
    }
  };
  backtrack(0, [], 0);
  return result;
};

// 문제 1: 모든 조합 구하기
const combine = (n, k) => {
  const result = [];

  const backtrack = (start, subset) => {
    // 종료 조건: 현재 조합의 길이가 k면 결과에 추가
    if (subset.length === k) {
      result.push([...subset]); // 부분집합을 복사해 저장
      return;
    }

    // 숫자를 탐색 (start부터 n까지)
    for (let i = start; i <= n; i++) {
      subset.push(i); // 숫자를 추가
      backtrack(i + 1, subset); // 다음 숫자를 탐색
      subset.pop(); // 상태를 복구 (백트래킹)
    }
  };

  backtrack(1, []); // 1부터 탐색 시작
  return result;
};

// 문제 2: 유효한 괄호 생성
const generateParenthesis = (n) => {
  const result = [];

  const backtrack = (open, close, current) => {
    // 종료 조건: 문자열 길이가 2 * n이면 결과에 추가
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 왼쪽 괄호를 추가할 수 있는 경우
    if (open < n) {
      backtrack(open + 1, close, current + "(");
    }

    // 오른쪽 괄호를 추가할 수 있는 경우
    if (close < open) {
      backtrack(open, close + 1, current + ")");
    }
  };

  backtrack(0, 0, ""); // 초기 상태에서 탐색 시작
  return result;
};

// 문제 3: 배열에서 모든 순열 구하기
const permute = (nums) => {
  const result = [];
  const backtrack = (arr, subset) => {
    if (subset.length === nums.length) {
      result.push([...subset]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      subset.push(arr[i]);
      let others = arr.slice(0, i).concat(arr.slice(i + 1));
      backtrack(others, subset);
      subset.pop();
    }
  };
  backtrack(nums, []);
  return result;
};
