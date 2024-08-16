---
external : false
title : "Expected matchups"
tag : [Programmers, Java]
date : 2024-08-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12985)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution
{
  public int solution(int n, int a, int b)
  {
    int round = 1;  // 현재 라운드를 1로 초기화

    while (true) {
      // A와 B가 같은 경기에서 만나는지 확인
      if ((a - 1) / 2 == (b - 1) / 2) {
        return round;  // 만나는 라운드를 반환
      }
      
      // 다음 라운드로 참가자 번호 업데이트
      a = (a + 1) / 2;
      b = (b + 1) / 2;
      round++;  // 라운드 증가
    }
  }
}
```
