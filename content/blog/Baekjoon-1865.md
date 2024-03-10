---
external: false
title: "Baekjoon 1865"
tag: [Baekjoon, Python]
date : 2024-02-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1865)에서 확인하실 수 있습니다.

## 2. Solve (memory: 31120KB, time: 816ms)

```python
import sys

input_func = sys.stdin.readline
INFINITY = int(1e9)

# 음의 싸이클 판별 함수
def has_negative_cycle(start):
  distances = [INFINITY] * (num_nodes + 1)
  distances[start] = 0

  for _ in range(num_nodes):
    for edge in edges:
      current_node, next_node, edge_cost = edge

      # 다음 노드로 이동하는 거리가 최단거리로 갱신 가능한 경우
      if distances[next_node] > edge_cost + distances[current_node]:
        distances[next_node] = edge_cost + distances[current_node]

        # 마지막 반복에서 갱신이 발생하면 음의 싸이클이 존재
        if _ == num_nodes - 1:
          return True

  return False

num_test_cases = int(input_func())

for _ in range(num_test_cases):
  num_nodes, num_edges, num_wormholes = map(int, input_func().split())
  edges = []

  # 도로 정보 입력
  for _ in range(num_edges):
    start_node, end_node, edge_cost = map(int, input_func().split())
    edges.append((start_node, end_node, edge_cost))
    edges.append((end_node, start_node, edge_cost))

  # 웜홀 정보 입력
  for _ in range(num_wormholes):
    start_node, end_node, wormhole_cost = map(int, input_func().split())
    edges.append((start_node, end_node, -wormhole_cost))

  # 음의 싸이클 여부 확인
  has_cycle = has_negative_cycle(1)
  if has_cycle:
    print("YES")
  else:
    print("NO")
```
