---
external : false
title : "For Loop in C"
tag : [Hackerrank, C]
date : 2024-05-06
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/for-loop-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <stdlib.h>

int main() 
{
  int a, b;
  scanf("%d\n%d", &a, &b);
  // Complete the code.
  for (int i = a; i <= b; i++) {
    if (i == 1) {
      printf("one\n");
    } else if (i == 2) {
      printf("two\n");
    } else if (i == 3) {
      printf("three\n");
    } else if (i == 4) {
      printf("four\n");
    } else if (i == 5) {
      printf("five\n");
    } else if (i == 6) {
      printf("six\n");
    } else if (i == 7) {
      printf("seven\n");
    } else if (i == 8) {
      printf("eight\n");
    } else if (i == 9) {
      printf("nine\n");
    } else if (i % 2 == 0) {
      printf("even\n");
    } else {
      printf("odd\n");
    }
  }
  return 0;
}
```
