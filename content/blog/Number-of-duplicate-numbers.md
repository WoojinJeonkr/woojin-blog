---
external : false
title : "Number of duplicate numbers"
tag : [Programmers, Java]
date : 2024-07-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120583)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  // 배열 `array`에서 값 `n`이 등장하는 횟수를 세는 함수
  public int solution(int[] array, int n) {
    // 등장 횟수를 누적할 변수
    int answer = 0;
    
    // 배열을 순회하면서 원하는 값이 등장하면 카운트 증가
    for (int num : array) {
      if (num == n) {
        answer += 1;
      }
    }
    
    // 세 결과 반환
    return answer;
  }
}
```
