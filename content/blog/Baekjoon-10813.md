---
external: false
title: "Baekjoon 10813"
date: 2023-04-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10813)

## 2. Solution

## 1. Python (memory: 31256KB, time: 48ms)

```python
n, m = map(int, input().split())
basket = [str(i + 1) for i in range(n)]

for _ in range(m):
    i, j = map(int, input().split())
    basket[i - 1], basket[j - 1] = basket[j - 1], basket[i - 1]

print(" ".join(basket))
```
