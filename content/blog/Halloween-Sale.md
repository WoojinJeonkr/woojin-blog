---
external : false
title : "Halloween Sale"
tag : [Hackerrank, Java]
date : 2024-03-27
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/halloween-sale/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int howManyGames(int p, int d, int m, int s) {
  int c = 0;
  int sum = 0;
  while(sum < s)
  {
    c++;
    sum = sum + p;
    if(sum > s) return c - 1;
    if(p != m) p -= d;
    if(p<=m) p = m;
  }
  return c;
}
```

## 3. Description

위에서 `howManyGames` 함수는 다음과 같은 파라미터를 받아서 실행됩니다.

1. 정수 `p`: 첫 번째 게임의 가격
2. 정수 `d`: 가격이 감소하는 값
3. 정수 `m`: 최소 가격
4. 정수 `s`: 가지고 있는 돈

이 함수는 가격이 일정한 비율로 감소하면서 게임을 살 수 있는 최대 개수를 계산합니다.  
초기에는 첫 번째 게임의 가격인 `p`부터 시작하여, 매번 `d`만큼 가격이 감소합니다.  
가격이 최소 가격인 `m`보다 작아지면, 더 이상 감소하지 않고 최소 가격인 `m`으로 유지됩니다.  
가격이 `s`보다 커지면, 더 이상 게임을 살 수 없으므로 바로 이전까지의 게임 개수를 반환합니다.  
이 함수는 최대한 많은 게임을 살 수 있도록 하면서 조건을 만족하는 게임 개수를 반환합니다.
