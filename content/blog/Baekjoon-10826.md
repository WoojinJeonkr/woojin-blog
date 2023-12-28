---
external: false
title: "Baekjoon 10826"
date: 2023-02-26
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10826)

## 2. Solution

```python
n = int(input())
x, y = 0, 1
for i in range(n):
    x, y = y, x+y
print(x)
```
