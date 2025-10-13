---
external : false
title : "Coding test preparation"
tag : [Programmers, Python]
date : 2025-10-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/118668)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(alp, cop, problems):
    # 모든 문제에서 요구하는 알고력과 코딩력의 최대값 계산
    max_alp = max(p[0] for p in problems)
    max_cop = max(p[1] for p in problems)

    # 시작 알고력/코딩력이 목표값보다 크면 목표값으로 조정
    alp = min(alp, max_alp)
    cop = min(cop, max_cop)

    # DP 테이블 초기화 (INF: 도달 불가능 상태를 의미)
    INF = 10**9
    dp = [[INF] * (max_cop + 1) for _ in range(max_alp + 1)]
    dp[alp][cop] = 0  # 시작 지점의 시간은 0

    # 모든 가능한 알고력/코딩력 상태를 탐색
    for a in range(alp, max_alp + 1):
        for c in range(cop, max_cop + 1):
            curr = dp[a][c]
            if curr == INF:
                continue

            # 1) 알고력 1 올리기
            if a + 1 <= max_alp:
                if dp[a + 1][c] > curr + 1:
                    dp[a + 1][c] = curr + 1

            # 2) 코딩력 1 올리기
            if c + 1 <= max_cop:
                if dp[a][c + 1] > curr + 1:
                    dp[a][c + 1] = curr + 1

            # 3) 현재 능력치로 풀 수 있는 문제를 풀기
            for req_a, req_c, rwd_a, rwd_c, cost in problems:
                if a >= req_a and c >= req_c:
                    na = min(max_alp, a + rwd_a)  # 보상 적용 후 최대값 초과 방지
                    nc = min(max_cop, c + rwd_c)
                    if dp[na][nc] > curr + cost:
                        dp[na][nc] = curr + cost

    # 목표 알고력/코딩력에 도달하는 최소 시간 반환
    return dp[max_alp][max_cop]
```
