---
external: false
title: "Baekjoon 2386"
date: 2023-03-12
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2386)

## 2. Solution

```python
while 42:
    t = input()
    if t == '#':
        break
    lst = t.split()
    alpha_upper = lst[0].upper()
    alpha_lower = lst[0].lower()
    s = " ".join(lst[1:])
    cnt = s.count(alpha_upper) + s.count(alpha_lower)
    print("{0} {1}".format(alpha_lower, cnt))
```
