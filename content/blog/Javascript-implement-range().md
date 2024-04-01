---
external : false
title : "Javascript implement range()"
tag : [BFE, Javascript]
date : 2024-04-01
---

## 1. Problem

문제 출처 : [JavaScript Coding Questions > 39. implement range()](https://bigfrontend.dev/problem/implement-range)

아래의 주석에 작성된 결과를 얻을 수 있도록 `range(from, to)` 함수를 작성하시오.

```js
for (let num of range(1, 4)) {
  console.log(num)  
}
// 1
// 2
// 3
// 4
```

## 2. Answer

```js
/**
 * 주어진 시작 값과 끝 값 사이의 정수 배열을 생성합니다.
 * @param {integer} from 시작 값
 * @param {integer} to 끝 값
 * @returns {Array} 시작 값부터 끝 값까지의 정수 배열
 */
function range(from, to) {
  // 빈 배열을 생성합니다.
  const result = [];
  for (let i = from; i <= to; i++) {
    // 시작 값부터 끝 값까지의 각 정수를 배열에 추가합니다.
    result.push(i);
  }
  return result; // 정수 배열 result를 반환합니다.
}
```
