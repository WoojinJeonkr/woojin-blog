---
external: false
title: "Baekjoon 13410"
date: 2023-03-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13410)

## 2. Solution

```python
N, K = map(int, input().split())
lst = [int(str(N*i)[::-1]) for i in range(1, K+1)]
print(max(lst))
```
