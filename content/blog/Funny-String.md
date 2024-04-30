---
external : false
title : "Funny String"
tag : [Hackerrank, Java]
date : 2024-04-30
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static String funnyString(String s) {
  // 입력 문자열을 뒤집습니다
  String reversedString = (new StringBuffer(s)).reverse().toString();
  // 문자열을 순회하면서 각 문자 간의 아스키 코드 값 차이를 비교합니다
  for (int i = 1; i < s.length(); i++) {
    // 현재 문자와 이전 문자의 아스키 코드 값 차이를 구합니다
    int diff1 = Math.abs(((int)s.charAt(i)) - ((int)s.charAt(i-1)));
    // 뒤집은 문자열에서도 동일한 위치의 문자의 아스키 코드 값 차이를 구합니다
    int diff2 = Math.abs(((int)reversedString.charAt(i)) - ((int)reversedString.charAt(i-1)));
    // 두 차이가 같지 않으면 "Not Funny"를 반환합니다
    if (diff1 != diff2) {
      return "Not Funny";
    }
  }
  // 모든 문자열이 조건을 만족하면 "Funny"를 반환합니다
  return "Funny";
}
```
