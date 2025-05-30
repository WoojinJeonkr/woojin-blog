---
external : false
title : "First negative number"
tag : [Programmers, Javascript]
date : 2025-05-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181896?language=javascript)에서 확인하실 수 있습니다.

## 2. Answer

```js
function solution(num_list) {
  var answer = -1; // 결과값을 -1로 초기화 (음수가 없을 경우 -1 반환)
  for (let i = 0; i < num_list.length; i++) {
    // 배열의 각 요소를 순회
    if (num_list[i] < 0) {
      // 음수를 발견하면
      answer = i;   // 해당 인덱스를 answer에 저장
      break;        // 처음 발견한 음수만 필요하므로 반복문 종료
    }
  }
  return answer;    // 결과값 반환
}
```
