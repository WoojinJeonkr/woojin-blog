---
external: false
title: "Baekjoon 3449"
date: 2023-04-22
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/3449)

## 2. Solution

## 1. Python (memory: 86116KB, time: 984ms)

```python
for _ in range(int(input())):
    n1, n2 = input(), input()
    print(f"Hamming distance is {sum(n1[i] != n2[i] for i in range(len(n1)))}.")
```
