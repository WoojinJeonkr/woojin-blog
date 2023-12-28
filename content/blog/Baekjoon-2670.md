---
external: false
title: "Baekjoon 2670"
date: 2023-01-10
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2670)

## 2. Solution

```python
N = int(input())
li = [float(input()) for _ in range(N)]
for i in range(1, N):
    li[i] = max(li[i], li[i]*li[i-1])
print("%.3f" % (max(li)))
```
