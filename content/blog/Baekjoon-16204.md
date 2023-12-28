---
external: false
title: "Baekjoon 16204"
date: 2023-01-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/16204)

## 2. Solution

```python
N, M, K = map(int, input().split())
print(min(M, K) + min(N-M, N-K))
```
