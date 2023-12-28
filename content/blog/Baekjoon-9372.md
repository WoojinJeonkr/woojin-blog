---
external: false
title: "Baekjoon 9372"
date: 2023-05-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9372)

## 2. Solution

## 1. Python (memory: 32404KB, time: 220ms)

```python
import sys

# 깊이 우선 탐색을 수행하는 함수
def depth_first_search(current_node, count):
    # 방문한 노드를 표시
    visited[current_node] = 1
    # 현재 노드와 연결된 노드들을 하나씩 탐색
    # 인접한 노드로 이동하면서 카운트 증가
    for neighbor in graph[current_node]:
        # 방문하지 않은 노드인 경우
        if visited[neighbor] == 0:
            count = depth_first_search(neighbor, count+1)
    # 이번 탐색에서 방문한 노드의 개수 반환
    return count

# 여러 개의 그래프를 입력받고 각 그래프에서 노드 1부터
# 시작하는 깊이 우선 탐색 결과를 출력
for _ in range(int(sys.stdin.readline())):
    # 노드 개수와 간선 개수 입력
    num_nodes, num_edges = map(int, sys.stdin.readline().split())
    # 인접 리스트로 그래프 생성
    graph = [[] for _ in range(num_nodes+1)]
    for _ in range(num_edges):
        # 간선 정보 입력
        u, v = map(int, sys.stdin.readline().split())
        # u와 v를 연결하는 간선 추가
        graph[u].append(v)
        # v와 u를 연결하는 간선 추가 (양방향 그래프이므로)
        graph[v].append(u)
    # 모든 노드의 방문 여부 초기화 (0: 미방문, 1: 방문)
    visited = [0]*(num_nodes+1)
    # 노드 1을 방문으로 표시
    visited[1] = 1
    # 노드 1부터 깊이 우선 탐색 시작
    count = depth_first_search(1, 0)
    # 탐색 결과 출력
    print(count)

```
