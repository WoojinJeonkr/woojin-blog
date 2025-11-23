---
external : False
title : "Non decreasing numbers"
tag : [Baekjoon, Python]
date : 2025-11-23
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11057)에서 확인하실 수 있습니다.

## 2. Answer

```py
N = int(input())
MOD = 10007

# dp[n][d] = 길이가 n이고 마지막 숫자가 d인 오르막 수의 개수
dp = [[0]*10 for _ in range(N+1)]

# 길이 1 초기값: 0~9 모두 1개씩
for d in range(10):
    dp[1][d] = 1

for n in range(2, N+1):
    dp[n][0] = 1  # 마지막 자리가 0이면 항상 1개 (무조건 000..0)
    for d in range(1, 10):
        # dp[n][d] = dp[n][d-1] (0~d-1까지의 합) + dp[n-1][d]
        dp[n][d] = (dp[n][d-1] + dp[n-1][d]) % MOD

# 길이가 N인 오르막 수 전체 합
print(sum(dp[N]) % MOD)
```
