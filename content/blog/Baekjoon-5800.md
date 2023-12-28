---
external: false
title: "Baekjoon 5800"
date: 2023-03-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5800)

## 2. Solution

```python
for c in range(int(input())):
    t = list(map(int, input().split()))
    n, lst = t[0], sorted(t[1:])
    Min = lst[0]
    Max = lst[-1]
    g = max([lst[i+1] - lst[i] for i in range(n-1)])
    print("Class", c+1)
    print(f"Max {Max}, Min {Min}, Largest gap {g}")
```
