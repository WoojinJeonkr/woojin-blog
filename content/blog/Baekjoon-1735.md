---
external: false
title: "Baekjoon 1735"
date: 2022-12-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1735)

## 2. Solution

```python
def gcd(x, y):
    if y == 0:
        return x
    x, y = y, x % y 
    return gcd(x, y)

n1, d1 = map(int, input().split())
n2, d2 = map(int, input().split())
n = n1*d2 + d1*n2
d = d1*d2
g = gcd(max(n,d), min(n,d))
print(n//g, d//g)
```
