---
external: false
title: "Baekjoon 1500"
date: 2022-12-05
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1500)

## 2. Solution

```python
s, k = map(int, input().split())
q = s // k
r = s % k
n = 1
while k > 0:
    if r > 0:
        n *= q + 1
        r -= 1
    else:
        n *= q
    k -= 1
print(n)
```
