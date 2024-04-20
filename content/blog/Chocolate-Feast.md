---
external : false
title : "Chocolate Feast"
tag : [Hackerrank, Java]
date : 2024-04-20
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/chocolate-feast/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int chocolateFeast(int n, int c, int m) {
  // 총 먹은 초콜릿 수를 저장하는 변수
  int ate = 0;
  // 초기에 구매 가능한 초콜릿 수
  int chocolates = n / c;
  // 구매한 초콜릿 수를 누적
  ate += chocolates;

  // 더 이상 교환할 수 있는 초콜릿이 없을 때까지 반복
  while (chocolates >= m) {
    // 교환 가능한 초콜릿 수를 누적
    ate += chocolates / m;
    // 교환 후 남은 초콜릿 수 업데이트
    chocolates = (chocolates / m) + (chocolates % m);
  }
  return ate;
}
```
