---
external: false
title: "Baekjoon 11256"
date: 2023-04-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11256)

## 2. Solution

```python
for _ in range(int(input())):
    J, N = map(int, input().split())
    lst = []
    for i in range(N):
        r, c = map(int, input().split())
        lst.append(r*c)
    lst.sort(reverse=True)
    cnt = 0
    while J > 0:
        J -= lst[cnt]
        cnt += 1
    print(cnt)
```
