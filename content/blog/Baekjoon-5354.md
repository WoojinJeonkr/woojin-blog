---
external: false
title: "Baekjoon 5354"
date: 2023-02-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5354)

## 2. Solution

```python
for _ in range(int(input())):
    n = int(input())
    if n < 3:
        for i in range(n):
            print('#'*n)
        print()
    else:
        print('#'*n)
        for i in range(n-2):
            print('#' + 'J'*(n-2) + '#')
        print('#'*n, '\n')
```
