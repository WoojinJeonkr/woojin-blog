---
external : false
title : "Number of sums of consecutive subsequences"
tag : [Programmers, Java]
date : 2024-07-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131701)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
  // 배열 `elements` 내 연속된 부분 합 집합의 크기를 반환하는 함수
  public int solution(int[] elements) {
    // 연속된 부분 합을 저장하는 집합
    Set<Integer> set = new HashSet<>();

    // 부분 합의 길이 (start)
    int start = 1;

    // 모든 길이 (start)에 대해 연속된 부분 합 계산
    while (start <= elements.length) {
      for (int i = 0; i < elements.length; i++) {
        // 연속된 부분 합 초기화
        int value = 0;

        // 지정된 길이 (start)만큼 elements 배열 순환하며 합 계산
        for (int j = i; j < i + start; j++) {
          // 배열 인덱스 범위 벗어나면 elements.length 를 이용하여 다시 시작
          value += elements[j % elements.length];
        }

        // 계산된 연속된 부분 합 집합에 추가
        set.add(value);
      }
      
      // 다음 길이 (start) 로 진행
      start++;
    }

    // 연속된 부분 합 집합의 크기 반환
    return set.size();
  }
}
```
