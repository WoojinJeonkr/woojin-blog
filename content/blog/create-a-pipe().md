---
external : false
title : "create a pipe()"
tag : [BFE, Javascript]
date : 2024-04-09
---

## 1. Problem

해당 문제는 [여기](https://bigfrontend.dev/problem/what-is-composition-create-a-pipe)에서 확인하실 수 있습니다.

## 2. Answer

```js
/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // 'funcs'라는 함수 배열을 매개변수로 받는 'pipe'라는 함수를 정의합니다.
  // 이 함수는 단일 매개변수 'n'을 받는 다른 함수를 반환합니다.
  return function (n) {
    // 'result'라는 변수를 'n'의 값으로 초기화합니다.
    let result = n;
    // 'funcs' 배열의 각 함수를 반복합니다.
    for (let func of funcs) {
      // 각 함수를 현재 'result' 값에 적용하여 'result'를 각 함수의 결과로 업데이트합니다.
      result = func(result);
    }
    // 마지막으로 'result'의 결과 값을 반환합니다.
    return result;
  };
}
```
