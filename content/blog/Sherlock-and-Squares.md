---
external : false
title : "Sherlock and Squares"
tag : [Hackerrank, Java]
date : 2024-05-01
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/sherlock-and-squares/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int squares(int a, int b) {
  // 주어진 범위 내의 정사각형 수를 계산하는 메서드입니다.
  // 제곱근을 이용하여 범위 내의 정사각형 수를 계산합니다.

  // b의 제곱근에서 a의 제곱근을 올림한 값만큼 빼고 1을 더하여
  // 주어진 범위 내의 정사각형 수를 구합니다.
  return (int)Math.sqrt(b) - (int)Math.ceil(Math.sqrt(a)) + 1;
}
```
