---
external: false
title: "Baekjoon 10974"
date: 2022-12-19
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10974)

## 2. Solution

```python
import itertools

N = int(input())
for arr in itertools.permutations(list(i+1 for i in range(N)), N):
    print(*arr)
```
