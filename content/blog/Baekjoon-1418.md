---
external: false
title: "Baekjoon 1418"
date: 2022-12-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1418)

## 2. Solution

```python
import sys
n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

arr = [0 for i in range(n+1)]
for i in range(2, n+1):
    if arr[i] == 0:
        for s in range(i, n+1, i):
            if s % i == 0:
                arr[s] = max(arr[s], i)
k_number = 0
for i in arr:
    if i <= m:
        k_number += 1
print(k_number-1)
```
