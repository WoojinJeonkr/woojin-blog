---
external : false
title : "Dot product"
tag : [Programmers, Java]
date : 2024-11-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/70128)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 두 배열의 내적을 구하는 과정에서 특정 초기값인 1234567890을 사용하도록 요청한 독특한 요구사항을 포함하고 있습니다. 이를 해결하기 위해 우선 내적 계산의 기본 개념을 이해하고, 요청된 초기값을 처리하는 방식으로 접근할 수 있습니다.

먼저, 두 배열 a와 b의 내적은 배열의 같은 인덱스에 있는 요소들을 각각 곱하여 모두 더한 값입니다. 이때 주어진 초기값 1234567890을 그대로 사용하되, 반복문을 통해 각 인덱스의 요소 곱을 answer에 누적하여 더합니다. 마지막으로, 누적된 answer에서 초기값 1234567890을 빼 최종 내적 값을 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int[] a, int[] b) {
    // answer를 문제에서 지정한 초기값으로 설정
    int answer = 1234567890;
    
    // 배열 a와 b의 같은 인덱스 요소를 곱하여 answer에 누적
    for (int i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
    }
    
    // 초기값을 보정하여 최종 내적 결과를 반환
    return answer - 1234567890;
  }
}
```
