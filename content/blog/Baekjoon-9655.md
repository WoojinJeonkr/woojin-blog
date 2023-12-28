---
external: false
title: "Baekjoon 9655"
date: 2023-02-15
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9655)

## 2. Solution

```python
N = int(input())
dp = [-1] * 1001
dp[1] = 1
dp[2] = 0
dp[3] = 1
for i in range(4, N+1):
    if dp[i-1] or dp[i-3]:
        dp[i] = 0
    else:
        dp[i] = 1
print('CY' if dp[N] == 0 else 'SK')
```
