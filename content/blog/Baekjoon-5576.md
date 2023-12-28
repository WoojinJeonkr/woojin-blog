---
external: false
title: "Baekjoon 5576"
date: 2023-05-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5576)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
w, k = [sorted([int(input()) for _ in range(10)], reverse=True)[:3] for _ in range(2)]
print(sum(w), sum(k))
```
