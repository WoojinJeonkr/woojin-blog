---
external : false
title : "Resignation 2"
tag : [Baekjoon, Python]
date : 2026-02-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15486)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

N = int(input())
dp = [0] * (N + 2)  # dp[i] = i일까지의 최대 수익

for day in range(1, N + 1):
    t, p = map(int, input().split())

    # 상담을 하지 않는 경우
    dp[day + 1] = max(dp[day + 1], dp[day])

    # 상담을 하는 경우
    end_day = day + t
    if end_day <= N + 1:
        dp[end_day] = max(dp[end_day], dp[day] + p)

print(max(dp))
```
