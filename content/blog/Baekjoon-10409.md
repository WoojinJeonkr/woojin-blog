---
external: false
title: "Baekjoon 10409"
date: 2023-06-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10409)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
n, T = map(int, input().split())
lst = list(map(int, input().split()))
print(next((i for i in range(n) if sum(lst[:i+1]) > T), n))
```
