---
external: false
title: "Baekjoon 14920"
date: 2023-06-22
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/14920)

## 2. Solution (C++17, memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int i = 1;
    while (n != 1) {
        if (n % 2 != 0) {
            n = 3 * n + 1;
        } else {
            n = n / 2;
        }
        i += 1;
    }

    cout << i;
    return 0;
}
```
