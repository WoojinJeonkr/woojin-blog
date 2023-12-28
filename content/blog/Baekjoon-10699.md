---
external: false
title: "Baekjoon 10699"
date: 2023-06-11
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10699)

## 2. Solution (memory: 1112KB, time: 0ms)

```cpp
#include <stdio.h>
#include <time.h>

int main() {
    time_t currentTime = time(NULL);
    struct tm* localTime = localtime(&currentTime);
    printf("%04d-%02d-%02d\n", localTime->tm_year + 1900, localTime->tm_mon + 1, localTime->tm_mday);
    return 0;
}
```
