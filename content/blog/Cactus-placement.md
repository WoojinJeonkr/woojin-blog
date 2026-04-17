---
external : false
title : "Cactus placement"
tag : [Programmers, Python]
date : 2026-04-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468379)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solution(m, n, h, w, drops):
    # 1. 각 칸의 빗방울 순서 기록 (1-based index)
    # 비가 안 오는 칸은 무한대(K+1) 처리
    grid = [[len(drops) + 1] * n for _ in range(m)]
    for i, (r, c) in enumerate(drops):
        grid[r][c] = i + 1

    # 2. 가로 방향 슬라이딩 윈도우 최솟값 (각 행별로 길이 w 윈도우)
    # row_min[r][c] 는 grid[r][c:c+w] 의 최솟값
    row_min = [[0] * (n - w + 1) for _ in range(m)]
    for r in range(m):
        dq = deque()
        for c in range(n):
            # 윈도우 범위를 벗어난 인덱스 제거
            if dq and dq[0] <= c - w:
                dq.popleft()
            # 현재 값보다 큰 이전 값들 제거 (최솟값 유지를 위해)
            while dq and grid[r][dq[-1]] >= grid[r][c]:
                dq.pop()
            dq.append(c)
            # 윈도우가 형성된 시점부터 기록
            if c >= w - 1:
                row_min[r][c - w + 1] = grid[r][dq[0]]

    # 3. 세로 방향 슬라이딩 윈도우 최솟값 (row_min의 각 열별로 길이 h 윈도우)
    # 최종적으로 (r, c)를 좌상단으로 하는 h*w 구역의 최솟값을 찾음
    max_time = -1
    answer = [0, 0]

    # row_min의 열 개수는 n-w+1
    for c in range(n - w + 1):
        dq = deque()
        for r in range(m):
            if dq and dq[0] <= r - h:
                dq.popleft()
            while dq and row_min[dq[-1]][c] >= row_min[r][c]:
                dq.pop()
            dq.append(r)

            if r >= h - 1:
                current_min_time = row_min[dq[0]][c]
                target_r = r - h + 1
                target_c = c

                # 가장 늦게 비를 맞는(최솟값이 가장 큰) 구역 찾기
                # 값이 같으면 상단, 좌측 우선이므로 부등호를 '>'로 유지
                if current_min_time > max_time:
                    max_time = current_min_time
                    answer = [target_r, target_c]

    return answer
```
