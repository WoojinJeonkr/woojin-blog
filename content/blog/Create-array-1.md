---
external : false
title : "Create array 1"
tag : [Programmers, Java]
date : 2024-07-09
---

## 1. Problem

해당 문제는 [여기]()에서 확인하실 수 있습니다

## 2. Answer

```java
class Solution {
  // n을 k등분 했을 때 각 부분의 마지막 값을 담는 배열을 반환하는 함수
  public int[] solution(int n, int k) {
    // k등분 했을 때 각 부분의 크기
    int size = n / k;
    // 결과를 담을 배열 생성
    int[] answer = new int[size];
    
    // 1부터 size까지 순회하면서 각 부분의 마지막 값을 answer 배열에 채움
    for (int i = 1; i <= size; i++) {
      answer[i - 1] = i * k;
    }
    
    // 계산된 결과 배열 반환
    return answer;
  }
}
```
