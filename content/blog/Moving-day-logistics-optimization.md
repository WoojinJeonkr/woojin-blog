---
external : false
title : "Moving day logistics optimization"
tag : [Python]
date : 2026-07-20
---

## 1. Problem

한 이삿짐 업체는 N개의 거점과 M개의 양방향 도로로 이루어진 도시에서 하루 동안 여러 건의 이사를 수행한다.

각 거점에는 일정한 양의 짐이 있으며, 트럭은 한 번에 최대 C만큼의 짐만 실을 수 있다.

한 번의 운행은 다음과 같이 정의된다.

- 하나의 거점에서 출발한다.
- 도로를 따라 이동하여 다른 거점으로 도착한다.
- 이동한 경로 위의 모든 거점에서 남아 있는 짐을 가능한 만큼 싣는다.
- 트럭의 적재량이 C가 되면 즉시 운행을 종료한다.
- 아직 짐이 남아 있다면 새로운 운행을 시작한다.

모든 운행은 항상 **최단 거리 경로 중 하나**를 이용해야 한다.

회사에서는 다음 두 가지를 최소화하려고 한다.

1. 총 운행 횟수
2. 총 이동 거리

총 운행 횟수를 최소로 하는 방법이 여러 개라면 총 이동 거리가 가장 작은 값을 출력하시오.

## 2. Input

첫째 줄에 거점의 개수 N, 도로의 개수 M, 트럭 적재 한도 C가 주어진다.

```text
N M C
```

둘째 줄에는 각 거점에 존재하는 짐의 양이 주어진다.

```text
A1 A2 ... AN
```

다음 M개의 줄에는 양방향 도로 정보가 주어진다.

```text
u v w
```

- u와 v를 잇는 길의 길이는 w이다.

## 3. Limit

- 2 ≤ N ≤ 100000
- N - 1 ≤ M ≤ 200000
- 1 ≤ C ≤ 10^9
- 0 ≤ Ai ≤ 10^9
- 1 ≤ w ≤ 10^6

## 4. Output

최소 운행 횟수와, 그때의 최소 총 이동 거리를 출력한다.

```text
trip distance
```

## 5. Input Example

```text
4 4 10
8 5 9 4
1 2 2
2 3 3
3 4 4
1 4 10
```

## 6. Output Example

```text
3 9
```

## 7. Example Explanation

전체 짐의 양은 다음과 같다.

```text
1 : 8
2 : 5
3 : 9
4 : 4
```

총 짐의 양은 26이다.

트럭 한 대는 최대 10만큼만 실을 수 있으므로 필요한 최소 운행 횟수는

```text
ceil(26 / 10) = 3
```

이다.

최단 경로를 적절히 선택하면 총 이동 거리를 9로 만들 수 있으며, 이것이 가능한 최소값이다.

## 8. Answer

```py
import heapq
import sys

input = sys.stdin.readline

n, m, c = map(int, input().split())
cargo = list(map(int, input().split()))

graph = [[] for _ in range(n)]

for _ in range(m):
    u, v, w = map(int, input().split())
    u -= 1
    v -= 1
    graph[u].append((v, w))
    graph[v].append((u, w))

total = sum(cargo)
trip = (total + c - 1) // c

INF = 10**18
dist = [INF] * n
dist[0] = 0

pq = [(0, 0)]

while pq:
    d, u = heapq.heappop(pq)
    if d != dist[u]:
        continue

    for v, w in graph[u]:
        nd = d + w
        if nd < dist[v]:
            dist[v] = nd
            heapq.heappush(pq, (nd, v))

answer = sum(dist)

print(trip, answer)
```
