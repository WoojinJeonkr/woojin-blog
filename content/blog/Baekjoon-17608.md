---
external: false
title: "Baekjoon 17608"
date: 2023-03-26
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/17608)

## 2. Solution

```python
import sys

heights = []
N = int(sys.stdin.readline())
n = current = before = 0

for i in range(N):
    heights.append(int(sys.stdin.readline()))

for _ in range(N):
    current = heights.pop()
    if current > before:
        n += 1
        before = current

print(n)
```
