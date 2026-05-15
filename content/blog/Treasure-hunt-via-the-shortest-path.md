---
external : false
title : "Treasure hunt via the shortest path"
tag : [Python]
date : 2026-05-15
---

## 1. Problem

한 왕국에는 여러 도시와 도시를 연결하는 도로가 있다.
각 도로는 이동 시간이 정해져 있으며, 모든 도로는 양방향이다.

용사는 시작 도시 1번에서 출발하여 보물이 있는 도시 N번까지 이동하려고 한다.
하지만 중간에 반드시 마법 상점 도시 K를 들러야만 한다.

가장 빠르게 이동할 때의 최소 시간을 구하시오.
만약 이동이 불가능하다면 -1을 출력하시오.

## 3. Input

- 첫째 줄에 도시의 개수 N, 도로의 개수 M, 반드시 들러야 하는 도시 K가 주어진다.
- 다음 M개의 줄에는 세 정수 A B C가 주어진다.
- A번 도시와 B번 도시가 이동 시간 C인 도로로 연결되어 있다는 의미이다.

## 5. Limit

- 2 ≤ N ≤ 10,000
- 1 ≤ M ≤ 100,000
- 1 ≤ C ≤ 1,000

## 6. Output

- 1 → K → N으로 이동하는 최소 시간을 출력한다.
- 이동할 수 없다면 -1을 출력한다.

## 7. Input Example

```text
5 6 3
1 2 2
1 3 5
2 3 1
2 4 2
3 5 3
4 5 1
```

## 8. Output Example

```text
6
```

## 9. Example Explanation

```text
1 → 2 → 3 의 비용은 3
3 → 5 의 비용은 3

따라서 총 최소 비용은 6이다.
```

## 10. Answer

```py
import heapq
import sys

input = sys.stdin.readline
INF = int(1e9)

# N: 도시 개수, M: 도로 개수, K: 반드시 방문해야 하는 도시
N, M, K = map(int, input().split())

graph = [[] for _ in range(N + 1)]

# 양방향 그래프
for _ in range(M):
    A, B, C = map(int, input().split())
    graph[A].append((B, C))
    graph[B].append((A, C))


def dijkstra(start):
    distance = [INF] * (N + 1)
    distance[start] = 0

    pq = []
    heapq.heappush(pq, (0, start))

    while pq:
        current_cost, current_node = heapq.heappop(pq)

        # 이미 더 짧은 경로가 존재하면 무시
        if current_cost > distance[current_node]:
            continue

        for next_node, next_cost in graph[current_node]:
            cost = current_cost + next_cost

            if cost < distance[next_node]:
                distance[next_node] = cost
                heapq.heappush(pq, (cost, next_node))

    return distance


# 1번 도시 기준 최단 거리
dist_from_start = dijkstra(1)

# K번 도시 기준 최단 거리
dist_from_k = dijkstra(K)

# 1 -> K -> N
answer = dist_from_start[K] + dist_from_k[N]

# 이동 불가능한 경우
if dist_from_start[K] >= INF or dist_from_k[N] >= INF:
    print(-1)
else:
    print(answer)
```
