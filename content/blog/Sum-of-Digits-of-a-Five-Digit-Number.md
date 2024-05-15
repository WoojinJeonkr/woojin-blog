---
external : false
title : "Sum of Digits of a Five Digit Number"
tag : [Hackerrank, C]
date : 2024-05-15
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/sum-of-digits-of-a-five-digit-number/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>

// n의 다섯 자리 숫자의 합을 계산하는 코드를 완성합니다.
// 주어진 정수 n을 10으로 나누어 각 자리의 숫자를 추출하고, 이를 sum 변수에 더합니다.
// 이후 n을 10으로 나눈 몫으로 갱신하여 다음 자릿수를 추출합니다.
// 이 과정을 n이 0이 될 때까지 반복하고, 최종적으로 sum에는 n의 각 자릿수의 합이 저장됩니다.

int main() {
  int n;
  scanf("%d", &n);
  int sum = 0;
  while(n != 0) {
    sum += n % 10;
    n /= 10;
  }
  printf("%d", sum);
  return 0;
}
```
