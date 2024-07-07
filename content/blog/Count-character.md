---
external : false
title : "Count character"
tag : [Programmers, Java]
date : 2024-07-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181902)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int[] solution(String my_string) {
    // 각 문자 (대문자와 소문자)의 개수를 저장할 배열 생성
    int[] answer = new int[52];

    // 문자열의 각 문자를 반복적으로 처리
    for (int i = 0; i < my_string.length(); i++) {
      char c = my_string.charAt(i); // 현재 인덱스의 문자 추출

      // 문자가 대문자인지 확인 (A ~ Z 범위)
      if (c >= 'A' && c <= 'Z') {
        // 대문자의 경우 answer 배열에서 해당 문자의 인덱스 계산 (A = 0, B = 1, ...)
        answer[c - 'A']++; // 해당 인덱스의 카운트 증가
      } else if (c >= 'a' && c <= 'z') {
        // 소문자의 경우 answer 배열에서 해당 문자의 인덱스 계산 (a = 26, b = 27, ...)
        answer[26 + c - 'a']++; // 해당 인덱스의 카운트 증가 (26만큼 오프셋)
      }
    }

    // 각 문자의 개수를 포함하는 배열 반환
    return answer;
  }
}
```
