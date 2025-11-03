---
external : false
title : "Zoo"
tag : [Baekjoon, Python]
date : 2025-11-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1309)에서 확인하실 수 있습니다.

## 2. Answer

```py
N = int(input())
MOD = 9901

# dp[i][j]: i번째 칸까지 배치했을 때 j상태로 끝나는 경우의 수
# j = 0 → 사자 없음, 1 → 위쪽만 있음, 2 → 아래쪽만 있음
dp = [[0] * 3 for _ in range(N + 1)]

# 초기 상태 (첫 번째 칸)
dp[1][0] = 1
dp[1][1] = 1
dp[1][2] = 1

# 점화식 적용
for i in range(2, N + 1):
    dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]) % MOD  # 이번 칸에 사자가 없음
    dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % MOD              # 위쪽 칸에만 사자
    dp[i][2] = (dp[i-1][0] + dp[i-1][1]) % MOD              # 아래쪽 칸에만 사자

# 최종 경우의 수 계산
result = (dp[N][0] + dp[N][1] + dp[N][2]) % MOD
print(result)
```
