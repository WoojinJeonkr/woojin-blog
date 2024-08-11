---
external : false
title : "Minimize the value"
tag : [Programmers, Java]
date : 2024-08-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12941)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int[] A, int[] B) {
    // 배열 A를 오름차순으로 정렬
    Arrays.sort(A);
    // 배열 B를 오름차순으로 정렬
    Arrays.sort(B);
    
    // 배열 B를 내림차순으로 변경
    for (int i = 0; i < B.length / 2; i++) {
      int temp = B[i];
      B[i] = B[B.length - i - 1];
      B[B.length - i - 1] = temp;
    }
    
    int answer = 0;
    // 각 배열의 원소를 곱하여 누적합을 계산
    for (int i = 0; i < A.length; i++) {
      answer += A[i] * B[i];
    }
    
    return answer;
  }
}
```
