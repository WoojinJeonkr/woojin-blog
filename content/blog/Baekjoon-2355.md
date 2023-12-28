---
external: false
title: "Baekjoon 2355"
date: 2023-01-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2355)

## 2. Solution

```python
a, b = map(int, input().split())

n_max = max(a, b)
n_min = min(a, b)

n = n_max - n_min
s = (n * (n + 1)) // 2

print(s + (n_min * (n + 1)))
```
