---
external : false
title : "Functions in C"
tag : [Hackerrank, C]
date : 2024-05-09
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/functions-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

문제에서 요구하는 함수는 4개의 수 중 가장 큰 값을 찾아 리턴해주는 함수이므로 다음과 같이 작성해주면 됩니다.

```cpp
int max_of_four(int a, int b, int c, int d) {
  int max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  if (d > max) max = d;
  return max;
}
```
