---
external : false
title : "Filling puzzle pieces"
tag : [Programmers, Python]
date : 2025-10-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/84021)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

# BFS로 한 조각의 좌표를 추출
def bfs(board, r, c, value):
    n = len(board)
    q = deque([(r, c)])
    board[r][c] = -1  # 방문 처리
    piece = [(r, c)]
    while q:
        x, y = q.popleft()
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            nx, ny = x+dx, y+dy
            if 0 <= nx < n and 0 <= ny < n and board[nx][ny] == value:
                board[nx][ny] = -1
                q.append((nx, ny))
                piece.append((nx, ny))
    # 좌표를 최소값 기준으로 정규화
    min_r = min(x for x, y in piece)
    min_c = min(y for x, y in piece)
    return sorted((x - min_r, y - min_c) for x, y in piece)

# 좌표 기반 90도 회전
def rotate(piece):
    return sorted((y, -x) for x, y in piece)

# 모든 회전 방향의 좌표 생성
def all_rotations(piece):
    rotations = []
    p = piece
    for _ in range(4):
        p = rotate(p)
        min_r = min(x for x, y in p)
        min_c = min(y for x, y in p)
        rotations.append(sorted((x - min_r, y - min_c) for x, y in p))
    return rotations

def solution(game_board, table):
    n = len(game_board)
    answer = 0

    # 게임 보드에서 빈 공간 추출
    game_pieces = []
    for i in range(n):
        for j in range(n):
            if game_board[i][j] == 0:
                game_pieces.append(bfs(game_board, i, j, 0))

    # 테이블에서 퍼즐 조각 추출
    table_pieces = []
    for i in range(n):
        for j in range(n):
            if table[i][j] == 1:
                table_pieces.append(bfs(table, i, j, 1))

    used = [False] * len(table_pieces)  # 이미 사용한 조각 체크

    # 게임 보드의 각 빈 공간에 맞는 퍼즐 찾기
    for gp in game_pieces:
        matched = False
        for idx, tp in enumerate(table_pieces):
            if used[idx]:
                continue
            for rotation in all_rotations(tp):
                if gp == rotation:
                    answer += len(gp)  # 채운 칸 수 추가
                    used[idx] = True
                    matched = True
                    break
            if matched:
                break

    return answer
```
