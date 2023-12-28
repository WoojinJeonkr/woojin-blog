---
external: false
title: "Baekjoon 3062"
date: 2023-03-17
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/3062)

## 2. Solution

```python
for _ in range(int(input())):
    s = input()
    n = str(int(s) + int(s[::-1]))
    print("YES" if n == n[::-1] else "NO")
```
