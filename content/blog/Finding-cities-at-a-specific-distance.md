---
external : false
title : "Finding cities at a specific distance"
tag : [Baekjoon, Python]
date : 2025-11-26
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/18352)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
import heapq
from collections import deque

input = sys.stdin.readline

N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N + 1)]

for _ in range(M):
    A, B = map(int, input().split())
    graph[A].append(B)

# 모든 도시의 최단거리를 -1로 초기화
distance = [-1] * (N + 1)
distance[X] = 0

# BFS 수행
queue = deque([X])

while queue:
    now = queue.popleft()

    for next_city in graph[now]:
        # 아직 방문하지 않은 도시라면
        if distance[next_city] == -1:
            distance[next_city] = distance[now] + 1
            queue.append(next_city)

# 거리 K인 도시들 찾기
answer = [i for i in range(1, N + 1) if distance[i] == K]

if answer:
    answer.sort()
    print("\n".join(map(str, answer)))
else:
    print(-1)
```
