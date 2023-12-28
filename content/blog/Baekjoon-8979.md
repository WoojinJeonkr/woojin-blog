---
external: false
title: "Baekjoon 8979"
date: 2023-05-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/8979)

## 2. Solution

## 1. Python (memory: 31256KB, time: 60ms)

```python
import sys

input_fn = sys.stdin.readline
n_nations, k_rank = map(int, input_fn().split())
nations = []
for i in range(n_nations):
    nations.append(list(map(int, input_fn().split())))
nations.sort(key=lambda x: (-x[1], -x[2], -x[3]))
for i in range(n_nations):
    if nations[i][0] == k_rank:
        index = i
for i in range(n_nations):
    if nations[index][1:] == nations[i][1:]:
        print(i + 1)
        break
```
