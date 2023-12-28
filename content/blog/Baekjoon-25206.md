---
external: false
title: "Baekjoon 25206"
date: 2023-05-22
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/25206)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
r, t = 0, 0
m = {"A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0}

for _ in range(20):
    _, s, rk = input().split()
    if rk != "P": r += float(s) * m[rk]; t += float(s)

print(r/t)
```
