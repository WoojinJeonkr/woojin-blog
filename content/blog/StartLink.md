---
external : false
title : "StartLink"
tag : [Baekjoon, Python]
date : 2025-11-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5014)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def bfs(F, S, G, U, D):
    # 방문한 층을 기록할 리스트
    visited = [False] * (F + 1)
    # BFS를 위한 큐 초기화 (현재 층, 버튼 누른 횟수)
    queue = deque([(S, 0)])
    visited[S] = True

    while queue:
        floor, presses = queue.popleft()
        
        # 목표 층에 도착한 경우 버튼 누른 횟수 반환
        if floor == G:
            return presses
        
        # 위로 이동
        up = floor + U
        if up <= F and not visited[up]:
            visited[up] = True
            queue.append((up, presses + 1))
        
        # 아래로 이동
        down = floor - D
        if down >= 1 and not visited[down]:
            visited[down] = True
            queue.append((down, presses + 1))
    
    # 도달할 수 없는 경우
    return "use the stairs"

# 입력 받기
F, S, G, U, D = map(int, input().split())

# 시작 층과 목표 층이 같으면 0 출력
if S == G:
    print(0)
else:
    # BFS 결과 출력
    print(bfs(F, S, G, U, D))
```
