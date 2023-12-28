---
external: false
title: "Baekjoon 2526"
date: 2023-06-19
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2526)

## 2. Solution 1 (C++17, memory: 2020KB, time: 0ms)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int n, p;
    std::cin >> n >> p;

    std::vector<int> l;
    int r = n;

    while (true) {
        r = (r * n) % p;
        auto it = std::find(l.begin(), l.end(), r);
        if (it != l.end()) {
            std::cout << l.size() - std::distance(l.begin(), it) << std::endl;
            break;
        }
        l.push_back(r);
    }
    return 0;
}
```
