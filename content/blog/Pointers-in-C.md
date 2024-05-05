---
external : false
title : "Pointers in C"
tag : [Hackerrank, C]
date : 2024-05-05
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/pointer-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <stdlib.h>

void update(int *a,int *b) {
  // 이 함수는 두 개의 정수 포인터를 인자로 받아서
  // 해당 포인터가 가리키는 변수들의 값을 업데이트합니다.
  // 두 변수의 합을 구하고 이를 첫 번째 변수에 할당하며,
  // 두 변수의 차이를 구해서 이를 두 번째 변수에 할당합니다.
  int sum, diff;
  sum = *a+*b;  // 두 변수의 합
  diff = abs(*a-*b);  // 두 변수의 차이
  *a = sum;  // 첫 번째 변수에 합을 할당
  *b = diff;  // 두 번째 변수에 차이를 할당
}

int main() {
  int a, b;
  int *pa = &a, *pb = &b;
  
  // 사용자로부터 두 개의 정수를 입력받습니다.
  scanf("%d %d", &a, &b);
  
  // update 함수를 호출하여 변수 a와 b를 업데이트합니다.
  update(pa, pb);
  
  // 업데이트된 변수 a와 b의 값을 출력합니다.
  printf("%d\n%d", a, b);

  return 0;
}
```
