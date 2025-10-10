---
external : false
title : "Card matching"
tag : [Programmers, Python]
date : 2025-10-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/72415?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque
from itertools import permutations

# 방향 벡터 (상, 하, 좌, 우)
DIRS = [(-1,0),(1,0),(0,-1),(0,1)]

def in_bounds(x,y):
    # 보드 범위 내에 있는지 확인
    return 0 <= x < 4 and 0 <= y < 4

def bfs(start, board):
    # 시작점으로부터 모든 칸까지의 최소 키 조작 횟수를 BFS로 계산
    dist = [[float('inf')] * 4 for _ in range(4)]
    q = deque()
    sx, sy = start
    dist[sx][sy] = 0
    q.append((sx,sy))
    while q:
        x,y = q.popleft()
        d = dist[x][y]
        # 방향키로 한 칸 이동
        for dx,dy in DIRS:
            nx, ny = x+dx, y+dy
            if not in_bounds(nx,ny):
                continue
            if dist[nx][ny] > d + 1:
                dist[nx][ny] = d + 1
                q.append((nx,ny))
        # Ctrl + 방향키로 이동
        for dx,dy in DIRS:
            nx, ny = x, y
            while True:
                tx, ty = nx + dx, ny + dy
                if not in_bounds(tx, ty):
                    break
                nx, ny = tx, ty
                if board[nx][ny] != 0:
                    break
            if dist[nx][ny] > d + 1:
                dist[nx][ny] = d + 1
                q.append((nx,ny))
    return dist

def solution(board, r, c):
    # 카드의 종류별 위치 저장
    pos = {}
    for i in range(4):
        for j in range(4):
            v = board[i][j]
            if v != 0:
                pos.setdefault(v, []).append((i,j))
    card_nums = list(pos.keys())
    if not card_nums:
        return 0

    min_ops = float('inf')

    # 카드 제거 순서의 모든 순열을 탐색
    for perm in permutations(card_nums):
        # 순열 내에서 각 카드 쌍 제거를 재귀적으로 수행
        def dfs(idx, cur_x, cur_y, cur_board, acc_cost):
            nonlocal min_ops
            # 현재 비용이 최소값보다 크면 가지치기
            if acc_cost >= min_ops:
                return
            # 모든 카드를 제거한 경우 최소값 갱신
            if idx == len(perm):
                min_ops = min(min_ops, acc_cost)
                return

            card = perm[idx]
            (a_x, a_y), (b_x, b_y) = pos[card]

            # 현재 위치에서 각 카드까지 거리 계산
            dist_from_cur = bfs((cur_x, cur_y), cur_board)

            # a -> b 순서로 제거
            cost_to_a = dist_from_cur[a_x][a_y]
            if cost_to_a != float('inf'):
                dist_from_a = bfs((a_x, a_y), cur_board)
                cost_a_to_b = dist_from_a[b_x][b_y]
                if cost_a_to_b != float('inf'):
                    cur_board[a_x][a_y] = 0
                    cur_board[b_x][b_y] = 0
                    dfs(idx+1, b_x, b_y, cur_board, acc_cost + cost_to_a + cost_a_to_b + 2)
                    cur_board[a_x][a_y] = card
                    cur_board[b_x][b_y] = card

            # b -> a 순서로 제거
            cost_to_b = dist_from_cur[b_x][b_y]
            if cost_to_b != float('inf'):
                dist_from_b = bfs((b_x, b_y), cur_board)
                cost_b_to_a = dist_from_b[a_x][a_y]
                if cost_b_to_a != float('inf'):
                    cur_board[a_x][a_y] = 0
                    cur_board[b_x][b_y] = 0
                    dfs(idx+1, a_x, a_y, cur_board, acc_cost + cost_to_b + cost_b_to_a + 2)
                    cur_board[a_x][a_y] = card
                    cur_board[b_x][b_y] = card

        # 현재 보드를 복사하여 탐색 시작
        start_board = [row[:] for row in board]
        dfs(0, r, c, start_board, 0)

    return min_ops
```
