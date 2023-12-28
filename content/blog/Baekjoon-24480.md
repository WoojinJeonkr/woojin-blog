---
external: false
title: "Baekjoon 24480"
date: 2023-11-05
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/24480)

## 2. 정답 코드 (Python, memory: 68780KB, time: 568ms)

```python
import sys

# 파이썬에서 재귀 호출의 깊이 제한을 늘리는 코드입니다.
# 기본적으로 파이썬은 재귀 호출의 깊이 제한이 있어 깊은 재귀 호출을 할 때
# RecursionError: maximum recursion depth exceeded in comparison 오류가 발생할 수 있습니다.
# sys.setrecursionlimit(limit) 함수를 사용하여 재귀 호출의 깊이 제한을 늘릴 수 있습니다.
sys.setrecursionlimit(10 ** 8)

# 깊이 우선 탐색 (DFS) 함수 정의
def dfs(node):
    global visit_count
    # 현재 노드를 방문했음을 표시
    visited[node] = True
    # 현재 노드의 방문 순서를 기록
    answer[node] = visit_count
    visit_count += 1
    # 현재 노드와 연결된 노드들을 내림차순으로 정렬
    graph[node].sort(reverse=True)
    # 현재 노드의 모든 이웃 노드에 대해 DFS 재귀 호출
    for neighbor in graph[node]:
        if not visited[neighbor]:
            dfs(neighbor)

N, M, R = map(int, sys.stdin.readline().split())

# 그래프 초기화
graph = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
answer = [0] * (N + 1)
visit_count = 1

# 간선 정보 입력
for _ in range(M):
    x, y = map(int, sys.stdin.readline().split())
    graph[x].append(y)
    graph[y].append(x)

# DFS 수행
dfs(R)

# 각 정점의 방문 순서 출력
for val in answer[1:]:
    print(val)
```
