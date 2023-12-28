---
external: false
title: "Baekjoon 1158"
date: 2022-12-13
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1158)

## 2. Solution

```python
from collections import deque

N, K = map(int, input().split())
queue = deque([i for i in range(1, N+1)])
res = []
for _ in range(N):
    for i in range(K-1):
        queue.append(queue.popleft())
    res.append(queue.popleft())
print('<', end='')
print(*res, sep=', ', end='')
print('>')
```
