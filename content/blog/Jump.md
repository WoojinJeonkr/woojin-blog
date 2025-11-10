---
external : false
title : "Jump"
tag : [Baekjoon, Python]
date : 2025-11-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1890)에서 확인하실 수 있습니다.

## 2. Answer

```py
N = int(input())  # 게임판의 크기 입력
board = [list(map(int, input().split())) for _ in range(N)]  # 게임판 숫자 입력

dp = [[0] * N for _ in range(N)]  # 각 칸까지 도달할 수 있는 경로 수 저장
dp[0][0] = 1  # 시작점 초기화

for i in range(N):
    for j in range(N):
        if dp[i][j] == 0 or board[i][j] == 0:
            continue  # 갈 수 없거나 마지막 칸이면 건너뜀
        jump = board[i][j]
        if i + jump < N:  # 아래로 점프
            dp[i + jump][j] += dp[i][j]
        if j + jump < N:  # 오른쪽으로 점프
            dp[i][j + jump] += dp[i][j]

print(dp[N-1][N-1])  # 도착점까지의 경로 수 출력
```
