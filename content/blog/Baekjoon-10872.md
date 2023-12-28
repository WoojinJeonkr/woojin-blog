---
external: false
title: "Baekjoon 10872"
date: 2023-06-14
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10872)

## 2. Solution (memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

int main() {
    int num;
    cin >> num;
    cout << factorial(num);
    return 0;
}
```
