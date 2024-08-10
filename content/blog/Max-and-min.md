---
external : false
title : "Max and min"
tag : [Programmers, Java]
date : 2024-08-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12939)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public String solution(String s) {
    // 문자열을 공백을 기준으로 나누어 배열로 변환
    String[] parts = s.split(" ");
    
    // 문자열 배열을 정수 배열로 변환
    int[] numbers = new int[parts.length];
    for (int i = 0; i < parts.length; i++) {
      numbers[i] = Integer.parseInt(parts[i]);
    }
    
    // 첫 번째 숫자로 최소값과 최대값 초기화
    int min = numbers[0];
    int max = numbers[0];
    
    // 나머지 숫자들로 최소값과 최대값을 업데이트
    for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    
    // 결과를 "최소값 최대값" 형태의 문자열로 반환
    return min + " " + max;
  }
}
```
