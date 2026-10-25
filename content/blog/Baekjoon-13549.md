---
external: false
title: "Baekjoon 13549"
tag: [Baekjoon, Python]
date: 2024-02-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/13549)에서 확인하실 수 있습니다.

## 2. Solve (memory: 37044KB, time: 188ms)

```python
import heapq

MAX = 100001
dist = [-1] * MAX  # 각 정점까지의 최단 거리를 저장하는 배열

n, k = map(int, input().split())
pq = [(0, n)]  # (거리, 정점)을 저장하는 우선순위 큐
dist[n] = 0  # 시작 정점의 최단 거리는 0으로 초기화

while pq:
  cost, now = heapq.heappop(pq)

  if now == k:
    print(dist[now])  # 목표 정점에 도달했을 때 최단 거리를 출력하고 종료
    break

  # 현재 정점에서 이동할 수 있는 경우들을 검사
  for next_pos in [now-1, now+1, now*2]:
    # 이동한 위치가 범위 내에 있고 아직 방문하지 않았다면
    if 0 <= next_pos < MAX and dist[next_pos] == -1:
      if next_pos == now * 2:
        # 순간이동의 경우
        dist[next_pos] = dist[now]
        heapq.heappush(pq, (cost, next_pos))
      else:
        # 일반적인 이동의 경우
        dist[next_pos] = dist[now] + 1
        heapq.heappush(pq, (cost + 1, next_pos))
```
