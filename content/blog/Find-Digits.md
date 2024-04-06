---
external : false
title : "Find Digits"
tag : [Hackerrank, Java]
date :  2024-04-06
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int findDigits(int n) {
  int x = n; // 변수 x를 n으로 초기화합니다.
  int c = 0; // 숫자의 갯수를 저장할 변수 c를 초기화합니다.
  while (x != 0) { // x가 0이 아닌 동안 반복합니다.
    int digit = x % 10; // 가장 오른쪽 자릿수를 구합니다.
    if (digit != 0 && n % digit == 0) c++; // 자릿수가 0이 아니고 n을 그 자릿수로 나눈 나머지가 0이면 c를 증가시킵니다.
    x /= 10; // x를 10으로 나눈 몫으로 업데이트합니다.
  }
  return c; // c 값을 반환합니다.
}
```
