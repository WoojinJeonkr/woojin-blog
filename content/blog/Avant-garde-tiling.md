---
external : False
title : "Avant garde tiling"
tag : [Programmers, Python]
date : 2025-09-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181186)에서 확인하실 수 있습니다.

## 2. Answer

```py
MOD = 1_000_000_007  # 큰 수를 다루기 위한 모듈러 연산

def solution(n):
    # dp[i] = 3 x i 타일링 경우의 수 (초기값)
    dp = [0, 1, 3, 10, 23, 62, 170]

    if n < 7:
        return dp[n]

    # 점화식 적용: dp[n] = dp[n-1] + 2*dp[n-2] + 6*dp[n-3] + dp[n-4] - dp[n-6]
    for i in range(7, n + 1):
        x = (dp[-1] + 2 * dp[-2] + 6 * dp[-3] + dp[-4] - dp[-6]) % MOD
        dp = dp[1:] + [x]  # 가장 오래된 값 제거, 새 값 추가

    return dp[-1]
```
