---
external : false
title : "Calculate the Nth term"
tag : [Hackerrank, C]
date : 2024-05-14
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/recursion-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
int find_nth_term(int n, int a, int b, int c) {
  int term, t1 = a, t2 = b, t3 = c;
  if (n == 1) term = t1; // 만약 n이 1이면, 첫 번째 항은 t1입니다.
  else if (n == 2) term = t2; // 그렇지 않고, n이 2이면, 두 번째 항은 t2입니다.
  else if (n == 3) term = t3; // 그렇지 않고, n이 3이면, 세 번째 항은 t3입니다.
  else {
    for (int i = 4; i <= n; i++) {
      term = t1 + t2 + t3; // 그렇지 않으면, n번째 항은 이전 세 항의 합입니다.
      t1 = t2; // 이전 세 항을 업데이트합니다.
      t2 = t3;
      t3 = term;
    }
  }
  return term;
}
```
