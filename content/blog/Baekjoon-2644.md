---
external: false
title: "Baekjoon 2644"
date: 2022-12-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2644)

## 2. Solution

```python
from collections import deque

def bfs(node):
    queue = deque()
    queue.append(node)
    while queue:
        node = queue.popleft()
        for n in graph[node]:
            if check[n] == 0:
                check[n] = check[node]+1
                queue.append(n)

n = int(input())
graph = [[] for _ in range(n+1)]
s, e = map(int, input().split())
for _ in range(int(input())):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
check = [0]*(n+1)
bfs(s)
print(check[e] if check[e] > 0 else -1)
```
