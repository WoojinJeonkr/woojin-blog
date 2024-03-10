---
external: false
title: "Java Substring Comparisons"
tag: [Hackerrank, Java]
date : 2024-02-05
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-string-compare/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static String getSmallestAndLargest(String s, int k) {
  // 초기값으로 첫 번째 substring을 설정
  String smallest = s.substring(0, k);
  String largest = s.substring(0, k);

  // 문자열을 탐색하면서 최소 및 최대 substring을 찾음
  for (int i = 1; i <= (s.length() - k); i++) {
    // 현재 위치에서 길이 k의 substring을 추출
    String lex = s.substring(i, i + k);

    // 현재 substring이 최소값보다 작으면 갱신
    if (lex.compareTo(smallest) < 0) {
      smallest = lex;
    }

    // 현재 substring이 최대값보다 크면 갱신
    if (lex.compareTo(largest) > 0) {
      largest = lex;
    }
  }

  // 최소값과 최대값을 반환
  return smallest + "\n" + largest;
}
```
