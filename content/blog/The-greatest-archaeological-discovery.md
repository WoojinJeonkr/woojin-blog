---
external : false
title : "The greatest archaeological discovery"
tag : [Programmers, Python]
date : 2025-09-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131702)에서 확인하실 수 있습니다.

## 2. Answer

```py
import copy
from itertools import product

def solution(clockHands):
    N = len(clockHands)

    # 시계를 돌릴 때 영향을 주는 방향들 (상, 하, 좌, 우, 자기 자신)
    directions = [(-1,0), (1,0), (0,-1), (0,1), (0,0)]

    # (x, y)에 있는 시계를 times번 돌리기
    def rotate(board, x, y, times):
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N:
                board[nx][ny] = (board[nx][ny] + times) % 4

    # 첫 번째 줄의 조작 방법을 기준으로 전체 퍼즐을 해결
    def simulate(first_row_ops):
        board = copy.deepcopy(clockHands)
        total_ops = 0

        # 첫 번째 줄 조작
        for j in range(N):
            times = first_row_ops[j]
            if times > 0:
                rotate(board, 0, j, times)
                total_ops += times

        # 2번째 줄부터는 위 줄을 12시로 맞추기 위해 조작
        for i in range(1, N):
            for j in range(N):
                # 위쪽 시계가 12시가 아니면, 현재 위치에서 회전해서 맞춤
                times = (4 - board[i-1][j]) % 4
                if times > 0:
                    rotate(board, i, j, times)
                    total_ops += times

        # 마지막 줄이 모두 12시(0)인지 확인
        if all(board[N-1][j] == 0 for j in range(N)):
            return total_ops
        else:
            return float('inf')

    min_ops = float('inf')

    # 첫 번째 줄의 모든 조합 (0~3번 돌리기) 시도
    for first_row_ops in product(range(4), repeat=N):
        min_ops = min(min_ops, simulate(first_row_ops))

    return min_ops
```
