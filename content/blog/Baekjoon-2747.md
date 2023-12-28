---
external: false
title: "Baekjoon 2747"
date: 2023-01-17
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2747)

## 2. Solution

```python
n = int(input())
a, b = 0, 1
for i in range(n):
    a, b = b, a+b
print(a)
```
