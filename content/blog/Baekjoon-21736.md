---
external: false
title: "Baekjoon 21736"
date: 2023-09-12
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/21736)

## 2. 정답 코드 (Python, memory: 39496KB, time: 744ms)

```python
from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
campus = []
start = ()

for i in range(N):
    row = list(input().rstrip())
    for j in range(M):  # 시작점 찾기
        if row[j] == 'I':
            start = (i, j)
    campus.append(row)
    

# BFS
direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]
visited = [[False] * M for _ in range(N)]
result = 0  # 만날 수 있는 사람 수

queue = deque([start])
visited[start[0]][start[1]] = True
while queue:
    x, y = queue.popleft()
    
    for dx, dy in direction:
        nx, ny = x + dx, y + dy
        
        # 캠퍼스를 벗어나지 않는 구역이고
        if 0 <= nx < N and 0 <= ny < M:
            # 벽이 아니고 방문하지 않은 곳이면 방문
            if campus[nx][ny] != 'X' and not visited[nx][ny]:
                queue.append((nx, ny))
                visited[nx][ny] = True
                
                # 사람이면 +1
                if campus[nx][ny] == 'P':
                    result += 1
                    
print(result if result > 0 else 'TT')
```
