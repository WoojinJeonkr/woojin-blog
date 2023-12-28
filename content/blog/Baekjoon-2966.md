---
external: false
title: "Baekjoon 2966"
date: 2023-07-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2966)

## 2. Solution (Python, memory: 31256KB, time: 48ms)

```python
a, b, g = 0, 0, 0
p = {'Adrian': ['A', 'B', 'C'], 'Bruno': ['B', 'A', 'B', 'C'], 'Goran': ['C', 'C', 'A', 'A', 'B', 'B']}

n = int(input())
c = input()

for i in range(n):
    for j in p.keys():
        if c[i] == p[j][i % len(p[j])]: globals()[j.lower()[0]] += 1

m = max(a, b, g)

print(m)

for j in p.keys():
    if globals()[j.lower()[0]] == m: print(j)
```
