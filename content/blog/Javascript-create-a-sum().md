---
external : false
title : "Javascript create a sum()"
tag : [BFE, Javascript]
date : 2024-03-22
---

## 1. Problem

문제 출처 : [BFE.dev JavaScript Coding Questions 23. create a sum()](https://bigfrontend.dev/problem/create-a-sum)

다음을 가능하게 하는 sum()을 만드세요.

```js
const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true
```

## 2. Solve

```js
/**
 * @param {number} num
 */
function sum(num) {
  // 내부 함수를 정의합니다.
  const innerSum = function (acc) {
    // 현재 숫자에 추가된 값을 더해 재귀적으로 sum 함수를 호출합니다.
    return sum(num + acc);
  };

  // 함수를 값으로 평가할 때 현재 숫자를 반환합니다.
  innerSum.valueOf = function () {
    return num;
  };

  return innerSum;
}
```
