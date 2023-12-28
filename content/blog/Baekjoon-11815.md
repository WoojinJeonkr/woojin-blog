---
external: false
title: "Baekjoon 11815"
date: 2023-01-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11815)

## 2. Solution

```python
N = int(input())
X = list(map(int, input().split()))

for i in range(N):
    if X[i] == (int(X[i] ** 0.5) ** 2):
        print(1, end = " ")
    else:
        print(0, end = " ")
```
