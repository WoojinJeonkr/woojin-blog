---
external: false
title: "Baekjoon 1871"
date: 2023-04-20
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1871)

## 2. Solution

## 1. Python (memory: 31256KB, time: 52ms)

```python
for _ in range(int(input())):
    L, D = input().split('-')
    n = int(D)
    s = 0
    for i in range(3):
        s += (ord(L[i]) - 65) * 26**(2-i)
    print("nice" if abs(s - n) <= 100 else "not nice")
```
