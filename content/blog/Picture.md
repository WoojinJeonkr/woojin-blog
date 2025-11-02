---
external : false
title : "Picture"
tag : [Baekjoon, Python]
date : 2025-11-02
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1926)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

# 도화지의 세로(n), 가로(m) 크기 입력
n, m = map(int, input().split())

# 도화지 정보 입력 (0: 빈 칸, 1: 색칠된 칸)
paper = [list(map(int, input().split())) for _ in range(n)]

# 방문 여부를 저장할 2차원 리스트
visited = [[False] * m for _ in range(n)]

# 상, 하, 좌, 우 방향 이동 정의
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# BFS로 연결된 그림 탐색
def bfs(x, y):
    queue = deque([(x, y)])
    visited[x][y] = True
    area = 1  # 현재 그림의 넓이

    while queue:
        cx, cy = queue.popleft()
        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]
            # 도화지 범위 안에 있고, 방문하지 않았으며, 색칠된 칸인 경우
            if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny] and paper[nx][ny] == 1:
                visited[nx][ny] = True
                queue.append((nx, ny))
                area += 1
    return area

count = 0      # 그림의 개수
max_area = 0   # 가장 넓은 그림의 넓이

# 도화지 전체 탐색
for i in range(n):
    for j in range(m):
        # 색칠된 칸이면서 아직 방문하지 않은 경우 새로운 그림 시작
        if paper[i][j] == 1 and not visited[i][j]:
            count += 1
            max_area = max(max_area, bfs(i, j))

# 결과 출력
print(count)
print(max_area)
```
