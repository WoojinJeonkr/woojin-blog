---
external : false
title : "Caesar cipher"
tag : [Programmers, Java]
date : 2024-08-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12926)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public String solution(String s, int n) {
    StringBuilder answer = new StringBuilder(); // 결과 문자열을 생성할 StringBuilder 객체
    for (char c : s.toCharArray()) { // 문자열의 각 문자를 처리
      if (c == ' ') {
        answer.append(c); // 공백은 그대로 추가
      } else if (Character.isLowerCase(c)) {
        // 소문자의 경우
        char newChar = (char) ((c - 'a' + n) % 26 + 'a'); // 알파벳 범위 내에서 이동
        answer.append(newChar); // 변환된 문자를 추가
      } else if (Character.isUpperCase(c)) {
        // 대문자의 경우
        char newChar = (char) ((c - 'A' + n) % 26 + 'A'); // 알파벳 범위 내에서 이동
        answer.append(newChar); // 변환된 문자를 추가
      }
    }
    return answer.toString(); // 최종 결과 문자열 반환
  }
}
```
