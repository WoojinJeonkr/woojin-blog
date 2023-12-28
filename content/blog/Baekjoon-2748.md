---
external: false
title: "Baekjoon 2748"
date: 2023-01-13
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2748)

## 2. Solution

```python
n = int(input())
f = 0
s = 1
tmp = 0
for i in range(n):
    tmp = f
    f = s
    s = tmp + s
print(f)
```
