---
external: false
title: "Baekjoon 1238"
tag: [Baekjoon, Python]
date: 2024-02-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1238)에서 확인하실 수 있습니다.

## 2. Solve (memory: 34236KB, time: 172ms)

```python
import heapq

def dijkstra(graph, start):
  # 각 노드까지의 최단 거리를 저장하는 딕셔너리
  distances = {node: float('inf') for node in graph}
  distances[start] = 0
  # 우선순위 큐를 사용하여 노드를 방문할 때 최단 거리를 계산하도록 함
  queue = [(0, start)]

  while queue:
    current_distance, current_node = heapq.heappop(queue)

    # 현재 거리가 이미 저장된 거리보다 크면 무시
    if current_distance > distances[current_node]:
      continue

    # 현재 노드의 이웃 노드를 탐색하면서 최단 거리 갱신
    for neighbor, weight in graph[current_node].items():
      distance = current_distance + weight
      if distance < distances[neighbor]:
        distances[neighbor] = distance
        heapq.heappush(queue, (distance, neighbor))

  return distances

def main():
  # 농장 수, 도로 수, 파티가 열리는 농장 번호 입력 받기
  N, M, X = map(int, input().split())
  # 파티로 가는 경로와 파티에서 돌아오는 경로를 나타내는 그래프 생성
  graph_to_party = {i: {} for i in range(1, N+1)}
  graph_from_party = {i: {} for i in range(1, N+1)}

  # 도로 정보 입력 받아 그래프에 추가
  for _ in range(M):
    A, B, T = map(int, input().split())
    graph_to_party[A][B] = T
    graph_from_party[B][A] = T

  # 파티로 가는 최단 거리 계산
  to_party_distances = dijkstra(graph_to_party, X)
  # 파티에서 돌아오는 최단 거리 계산
  from_party_distances = dijkstra(graph_from_party, X)

  # 각 농장까지의 왕복 거리 중 가장 긴 시간 찾기
  max_time = 0
  for i in range(1, N+1):
    total_time = to_party_distances[i] + from_party_distances[i]
    max_time = max(max_time, total_time)

  # 결과 출력
  print(max_time)

if __name__ == "__main__":
  main()
```
