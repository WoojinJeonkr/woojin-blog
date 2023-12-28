---
external: false
title: "Baekjoon 10707"
date: 2022-12-26
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10707)

## 2. Solution

```python
A = int(input())
B = int(input())
C = int(input())
D = int(input())
P = int(input())
x = A * P
if C < P:
    y = B + ((P - C) * D)
else:
    y = B
if x < y:
    print(x)
else:
    print(y)
```
