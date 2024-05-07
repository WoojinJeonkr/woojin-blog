---
external : false
title : "Sum and Difference of Two Numbers"
tag : [Hackerrank, C]
date : 2024-05-07
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/sum-numbers-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>

int main()
{
  // 사용자로부터 두 개의 정수를 입력받습니다.
  int a, b;
  scanf("%d %d", &a, &b);
  
  // 사용자로부터 두 개의 실수를 입력받습니다.
  float c, d;
  scanf("%f %f", &c, &d);
  
  // 정수들의 합과 차를 계산합니다.
  int int_sum = a + b;
  int int_diff = a - b;
  
  // 실수들의 합과 차를 계산합니다.
  float float_sum = c + d;
  float float_diff = c - d;
  
  // 정수들의 합과 차를 출력합니다.
  printf("%d %d\n", int_sum, int_diff);
  
  // 실수들의 합과 차를 출력합니다.
  printf("%0.1f %0.1f", float_sum, float_diff);
  
  return 0;
}
```
