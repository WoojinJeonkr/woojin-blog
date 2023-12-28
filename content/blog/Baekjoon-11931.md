---
external: false
title: "Baekjoon 11931"
date: 2023-02-19
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11931)

## 2. Solution

```python
import sys

N = int(sys.stdin.readline())

num = []

for _ in range(0, N):
    num.append(int(sys.stdin.readline()))

num.sort()
num.reverse()
for i in range(0, N):
    print(num[i])
```
