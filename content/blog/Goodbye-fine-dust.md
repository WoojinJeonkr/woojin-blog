---
external : false
title : "Goodbye fine dust"
tag : [Baekjoon, Python]
date : 2025-11-22
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17144)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

R, C, T = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(R)]

# 공기청정기 위치 찾기 (1번 열에 -1이 연속으로 두 칸)
purifiers = []
for r in range(R):
    if A[r][0] == -1:
        purifiers.append(r)
# purifiers[0] = 위쪽 공기청정기 행, purifiers[1] = 아래쪽 공기청정기 행
up = purifiers[0]
down = purifiers[1]

# 방향 벡터(상,하,좌,우)
dirs = [(-1,0),(1,0),(0,-1),(0,1)]

def diffuse():
    new = [[0]*C for _ in range(R)]
    # 공기청정기 위치는 -1로 표시
    new[up][0] = -1
    new[down][0] = -1

    for r in range(R):
        for c in range(C):
            if A[r][c] > 0:
                amount = A[r][c]
                spread = amount // 5
                if spread > 0:
                    cnt = 0
                    for dr, dc in dirs:
                        nr, nc = r + dr, c + dc
                        if 0 <= nr < R and 0 <= nc < C and A[nr][nc] != -1:
                            new[nr][nc] += spread
                            cnt += 1
                    new[r][c] += amount - spread * cnt
                else:
                    new[r][c] += amount
    return new

def operate_purifier(board):
    # 위쪽 공기청정기 (반시계 방향)
    # 위쪽: 위로, 오른쪽으로, 아래로, 왼쪽으로 (순환)
    # 위쪽 세로 이동 (아래->위 방향으로 값 복사)
    # (up-1,0) 부터 (1,0) 까지 위로 당김
    for r in range(up-1, 0, -1):
        board[r][0] = board[r-1][0]
    # top row 왼->오 당김
    for c in range(0, C-1):
        board[0][c] = board[0][c+1]
    # 오른쪽 열 위->아래 당김 (0,C-1)부터 (up,C-1)
    for r in range(0, up):
        board[r][C-1] = board[r+1][C-1]
    # 공기청정기 행 오른->왼 당김 (up,C-1)부터 (up,1)
    for c in range(C-1, 1, -1):
        board[up][c] = board[up][c-1]
    # 공기청정기 바로 오른쪽은 0(정화된 바람)
    board[up][1] = 0
    board[up][0] = -1  # 공기청정기 위치 복원

    # 아래쪽 공기청정기 (시계 방향)
    # 아래쪽: 아래로, 오른쪽으로, 위로, 왼쪽으로 (순환)
    # 아래쪽 세로 이동 (위->아래 방향으로 값 복사)
    for r in range(down+1, R-1):
        board[r][0] = board[r+1][0]
    # bottom row 왼->오 당김
    for c in range(0, C-1):
        board[R-1][c] = board[R-1][c+1]
    # 오른쪽 열 아래->위 당김 (R-1,C-1)부터 (down,C-1)
    for r in range(R-1, down, -1):
        board[r][C-1] = board[r-1][C-1]
    # 공기청정기 행 오른->왼 당김 (down,C-1)부터 (down,1)
    for c in range(C-1, 1, -1):
        board[down][c] = board[down][c-1]
    # 공기청정기 바로 오른쪽은 0(정화된 바람)
    board[down][1] = 0
    board[down][0] = -1  # 공기청정기 위치 복원

for _ in range(T):
    A = diffuse()
    operate_purifier(A)

# 결과: 미세먼지 총합 (공기청정기 -1 제외)
ans = 0
for r in range(R):
    for c in range(C):
        if A[r][c] > 0:
            ans += A[r][c]

print(ans)
```
