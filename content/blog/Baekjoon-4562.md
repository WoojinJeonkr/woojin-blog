---
external: false
title: "Baekjoon 4562"
date: 2023-01-31
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/4562)

## 2. Solution

```python
n = int(input())
for _ in range(n):
    x, y = map(int, input().split())
    if x >= y:
        print("MMM BRAINS");
    else:
        print("NO BRAINS");
```
