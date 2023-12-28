---
external: false
title: "Baekjoon 2991"
date: 2023-01-15
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2991)

## 2. Solution

```python
A, B, C, D = map(int, input().split())
li = list(map(int, input().split()))
for n in li:
    attacked = 0
    if 0 < n % (A+B) <= A:
        attacked += 1
    if 0 < n % (C+D) <= C:
        attacked += 1
    print(attacked)
```
