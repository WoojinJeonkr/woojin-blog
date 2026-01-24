---
external : false
title : "Payment helper for moon rabbits"
tag : [Baekjoon, Python]
date : 2026-01-24
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17212)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 지불해야 할 금액 N 입력
N = int(input())

# dp[i] : i원을 만들기 위한 최소 동전 개수
dp = [0] * (N + 1)

# 1원부터 N원까지 차례대로 최소 동전 개수 계산
for i in range(1, N + 1):
    # 기본값: 1원짜리 동전을 하나 추가하는 경우
    dp[i] = dp[i - 1] + 1

    # 2원짜리 동전을 사용하는 경우
    if i >= 2:
        dp[i] = min(dp[i], dp[i - 2] + 1)

    # 5원짜리 동전을 사용하는 경우
    if i >= 5:
        dp[i] = min(dp[i], dp[i - 5] + 1)

    # 7원짜리 동전을 사용하는 경우
    if i >= 7:
        dp[i] = min(dp[i], dp[i - 7] + 1)

# N원을 합법적으로(최소 동전 개수로) 지불할 때 필요한 동전 개수 출력
print(dp[N])
```
