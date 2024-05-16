---
external : false
title : "Bitwise Operators"
tag : [Hackerrank, C]
date : 2024-05-16
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/bitwise-operators-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
void calculate_the_maximum(int n, int k) {
  int max_and = 0, max_or = 0, max_xor = 0;
  for (int i = 1; i <= n; i++) {
    for (int j = i + 1; j <= n; j++) {
      int temp_and = i & j; // 두 수의 AND 연산 결과를 임시 변수에 저장합니다.
      int temp_or = i | j;  // 두 수의 OR 연산 결과를 임시 변수에 저장합니다.
      int temp_xor = i ^ j; // 두 수의 XOR 연산 결과를 임시 변수에 저장합니다.
      if (temp_and > max_and && temp_and < k) max_and = temp_and; // 현재 AND 연산 결과가 최대값이고 k보다 작으면 최대값을 업데이트합니다.
      if (temp_or > max_or && temp_or < k) max_or = temp_or;     // 현재 OR 연산 결과가 최대값이고 k보다 작으면 최대값을 업데이트합니다.
      if (temp_xor > max_xor && temp_xor < k) max_xor = temp_xor; // 현재 XOR 연산 결과가 최대값이고 k보다 작으면 최대값을 업데이트합니다.
    }
  }
  printf("%d\n%d\n%d", max_and, max_or, max_xor); // 최대값들을 출력합니다.
}
```
