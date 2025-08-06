---
external : false
title : "Way to school"
tag : [Programmers, Python]
date : 2025-08-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42898)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(m, n, puddles):
    MOD = 1_000_000_007  # 나머지를 구할 기준 값
    dp = [[0] * (m + 1) for _ in range(n + 1)]  # DP 테이블 초기화 (1-indexed)
    puddles_set = set((x, y) for x, y in puddles)  # 물에 잠긴 지역을 집합으로 저장
    dp[1][1] = 1  # 시작점은 경로 1개

    for y in range(1, n + 1):
        for x in range(1, m + 1):
            if (x, y) in puddles_set:
                dp[y][x] = 0  # 물에 잠긴 지역은 경로 없음
            elif not (x == 1 and y == 1):
                # 왼쪽과 위쪽에서 오는 경로 수의 합을 현재 위치에 저장
                dp[y][x] = (dp[y - 1][x] + dp[y][x - 1]) % MOD

    return dp[n][m]  # 학교 위치까지의 경로 수 반환
```
