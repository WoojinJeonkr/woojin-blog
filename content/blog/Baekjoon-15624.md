---
external: false
title: "Baekjoon 15624"
date: 2023-03-08
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/15624)

## 2. Solution

```python
n = int(input())
A, B = 0, 1
for i in range(n):
    A, B = (A + B)%1000000007, A%1000000007
print(A)
```
