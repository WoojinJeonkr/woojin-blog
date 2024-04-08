---
external : false
title : "Library Fine"
tag : [Hackerrank, Java]
date : 2024-04-08
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/library-fine/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int libraryFine(int d1, int m1, int y1, int d2, int m2, int y2) {
  // 연체료 계산을 위한 함수
  if (y1 > y2) { return 10000; } // 반납 연도가 대출 연도보다 늦을 경우 연체료는 10000원
  if (m1 > m2 && y1 == y2) { return 500 * (m1 - m2); } // 반납 월이 대출 월보다 늦을 경우 연체료는 월별로 500원씩
  if (d1 > d2 && m1 == m2 && y1 == y2) { return 15 * (d1 - d2); } // 반납 일이 대출 일보다 늦을 경우 연체료는 일별로 15원씩
  return 0; // 연체가 없을 경우 연체료는 0원
}
```
