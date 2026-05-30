---
external : false
title : "Bank robbery escape route analysis"
tag : [Python]
date : 2026-05-30
---

## 1. Problem

대규모 은행 강도 사건이 발생하였다.

강도단은 여러 도시를 도로로 이동하며 도주하고 있으며,
경찰은 강도단이 최종적으로 도착할 수 있는 가장 안전한 경로를 분석하려고 한다.

도시들은 번호 1부터 N까지 존재하며,
도시들을 연결하는 도로 정보가 주어진다.

각 도로에는 이동 시간이 존재한다.

강도단은 반드시 은행이 위치한 도시 1번에서 출발하여
은신처가 있는 도시 N번으로 이동해야 한다.

경찰은 강도단이 사용할 수 있는 경로 중
총 이동 시간이 가장 짧은 경로의 시간을 알고 싶어 한다.

도시와 도로 정보가 주어질 때,
1번 도시에서 N번 도시까지 이동하는 최소 시간을 구하시오.

## 2. Input

- 첫째 줄에 도시 수 N, 도로 수 M이 주어진다.
- 다음 M개의 줄에는 다음 정보가 주어진다.

```text
A B T
```

의미:

- A번 도시와 B번 도시가 연결되어 있다.
- 이동 시간은 T이다.
- 모든 도로는 양방향 이동 가능하다.

## 3. Limit

- 2 ≤ N ≤ 100000
- 1 ≤ M ≤ 300000
- 1 ≤ T ≤ 100000
- 항상 1번 도시에서 N번 도시로 이동 가능한 경우만 주어진다.

## 4. Output

1번 도시에서 N번 도시까지 이동하는 최소 이동 시간을 출력한다.

## 5. Input Example

```text
6 8
1 2 4
1 3 2
2 3 1
2 4 5
3 4 8
3 5 10
4 6 2
5 6 3
```

## 6. Output Example

```text
10
```

## 7. Example Explanation

가능한 주요 경로들은 다음과 같다.

```text
1 → 2 → 4 → 6 = 11
1 → 3 → 4 → 6 = 12
1 → 3 → 5 → 6 = 15
1 → 3 → 2 → 4 → 6 = 10
```

가장 짧은 경로는

```text
1 → 3 → 2 → 4 → 6
```

이며 총 이동 시간은

```text
10
```

이다.

이 문제는 가중치가 있는 그래프에서의 최단 경로 문제로,
다익스트라(Dijkstra) 알고리즘을 사용하여 해결할 수 있다.

## 8. Answer

```py
import sys
import heapq

input = sys.stdin.readline

# 입력
n, m = map(int, input().split())

graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b, t = map(int, input().split())

    graph[a].append((b, t))
    graph[b].append((a, t))

INF = float('inf')
dist = [INF] * (n + 1)

# 다익스트라
pq = [(0, 1)]
dist[1] = 0

while pq:
    current_time, city = heapq.heappop(pq)

    if current_time > dist[city]:
        continue

    for next_city, move_time in graph[city]:
        new_time = current_time + move_time

        if new_time < dist[next_city]:
            dist[next_city] = new_time
            heapq.heappush(pq, (new_time, next_city))

print(dist[n])
```
