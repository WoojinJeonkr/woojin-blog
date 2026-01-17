---
external : false
title : "Finding areas"
tag : [Baekjoon, Python]
date : 2026-01-17
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2583)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

# M: 세로 크기, N: 가로 크기, K: 직사각형 개수
M, N, K = map(int, input().split())

# 0으로 초기화된 M x N 격자 생성
# 0: 빈 공간, 1: 직사각형으로 막힌 공간, 2: 방문 완료한 공간
grid = [[0] * N for _ in range(M)]

# 각 직사각형의 좌표를 받아 해당 영역을 1로 채우기
# (x1, y1) ~ (x2, y2)는 직사각형의 왼쪽 아래와 오른쪽 위 좌표
for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for y in range(y1, y2):
        for x in range(x1, x2):
            grid[y][x] = 1

# 상, 하, 좌, 우 이동을 위한 좌표 변화량
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(start_y, start_x):
    queue = deque()
    queue.append((start_y, start_x))
    
    # 시작 지점을 방문 처리
    grid[start_y][start_x] = 2
    area = 1

    # 큐가 빌 때까지 인접한 빈 공간을 탐색
    while queue:
        y, x = queue.popleft()
        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]
            
            # 격자 범위 안이고, 아직 방문하지 않은 빈 공간일 때
            if 0 <= ny < M and 0 <= nx < N and grid[ny][nx] == 0:
                grid[ny][nx] = 2      # 방문 처리
                queue.append((ny, nx))
                area += 1            # 영역 넓이 증가

    return area

# 값이 0인 칸을 발견하면 새로운 영역이므로 BFS 실행
areas = []
for i in range(M):
    for j in range(N):
        if grid[i][j] == 0:
            areas.append(bfs(i, j))

# 영역 개수와 각 영역의 넓이를 오름차순으로 출력
areas.sort()
print(len(areas))
print(*areas)
```
