---
external : false
title : "Move"
tag : [Baekjoon, Python]
date : 2025-11-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11048)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 미로의 크기 N, M 입력
N, M = map(int, input().split())

# 각 방에 놓인 사탕 개수 입력
candy = [list(map(int, input().split())) for _ in range(N)]

# dp[r][c]: (r, c) 위치까지 가져올 수 있는 사탕의 최댓값
dp = [[0] * M for _ in range(N)]

for i in range(N):
    for j in range(M):
        # 위, 왼쪽, 대각선 위-왼쪽 중 가능한 위치에서 최댓값을 선택
        from_top = dp[i-1][j] if i > 0 else 0
        from_left = dp[i][j-1] if j > 0 else 0
        from_diag = dp[i-1][j-1] if i > 0 and j > 0 else 0
        
        # 현재 위치의 사탕 개수와 합산
        dp[i][j] = candy[i][j] + max(from_top, from_left, from_diag)

# (N, M) 위치에서의 최댓값 출력
print(dp[N-1][M-1])
```
