---
external: false
title: "Baekjoon 9009"
date: 2023-02-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/9009)

## 2. Solution

```python
import sys

t = int(sys.stdin.readline())

fibonacci = [0, 1]

for x in range(2, 46):
    fibonacci.append(fibonacci[x-2] + fibonacci[x-1])

for _ in range(t):
    n = int(sys.stdin.readline())
    res = []

    for i in range(45, 0, -1):
        if fibonacci[i] <= n:
            res.append(fibonacci[i])
            n -= fibonacci[i]
            if n == 0:
                res.sort()
                for result in res:
                    print(result, end=" ")
                break
```
