---
external: false
title: "Baekjoon 1699"
date: 2023-01-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1699)

## 2. Solution

```python
n = int(input())
dp = [i for i in range (n + 1)]

for i in range(1, n + 1):
    for j in range(1, i):
        if (j * j) > i:
            break
        if dp[i] > dp[i - j * j] + 1:
            dp[i] = dp[i - j * j] + 1

print(dp[n])
```
