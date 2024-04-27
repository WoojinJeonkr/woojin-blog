---
external : false
title : "Save the Prisoner!"
tag : [Hackerrank, Java]
date : 2024-04-27
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static int saveThePrisoner(int n, int m, int s) {
  // 해당 감옥의 수 n, 사탕의 개수 m, 처음으로 사탕을 받는 죄수 s를 입력받아
  // 독극물이 섞인 사탕을 받게 될 죄수를 계산합니다.

  // 독극물이 섞인 사탕을 받게 될 죄수를 계산합니다.
  int poisonedPrisoner = (s + m - 1) % n;

  // 만약 독극물이 섞인 사탕을 받게 될 죄수가 0이면, 마지막 죄수가 됩니다.
  if (poisonedPrisoner == 0) {
    poisonedPrisoner = n;
  }

  // 독극물이 섞인 사탕을 받게 될 죄수를 반환합니다.
  return poisonedPrisoner;
}
```
