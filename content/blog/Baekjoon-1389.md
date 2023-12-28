---
external: false
title: "Baekjoon 1389"
date: 2023-05-25
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1389)

## 2. Solution (memory: 34044KB, time: 76ms)

```python
from collections import deque

def bfs(num,n):
  bacon=[0]*(n+1)
  visited=[num]
  queue=deque()
  queue.append(num)

  while queue:
    k=queue.popleft()
    for i in relation[k]:
      if i not in visited:
        bacon[i]=bacon[k]+1
        visited.append(i)
        queue.append(i)
  return sum(bacon)

n, m=map(int, input().split())
relation={i:[] for i in range(1,n+1)}
for i in range(m):
  a, b=map(int, input().split())
  relation[a].append(b)
  relation[b].append(a)

result=[]
for num in range(1,n+1):
  result.append(bfs(num,n))
print(result.index(min(result))+1)
```
