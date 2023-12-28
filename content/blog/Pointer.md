---
external: false
title: "Pointer"
date: 2023-09-17
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/c-tutorial-pointer/problem?isFullScreen=true)

## 2. 정답 코드 (C++)

```cpp
#include <stdio.h>
#include <cstdlib>

void update(int *a,int *b) {
    int sum_result = *a + *b;
    int minus_result = *a - *b;
    *a = sum_result;
    *b = abs(minus_result);
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
```
