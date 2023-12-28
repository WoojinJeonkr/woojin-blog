---
external: false
title: "Baekjoon 15989"
date: 2023-04-14
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/15989)

## 2. Solution

```python
dp = [1] * 10001
for i in range(2, 10001): dp[i] += dp[i - 2]
for i in range(3, 10001): dp[i] += dp[i - 3]
for _ in range(int(input())): print(dp[int(input())])
```
