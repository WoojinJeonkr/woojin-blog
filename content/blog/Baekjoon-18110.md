---
external: false
title: "Baekjoon 18110"
date: 2023-01-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/18110)

## 2. Solution

```python
import sys

def round_exclusion(n):
    return int(n) + (1 if n - int(n) >= 0.5 else 0)
 
n = int(sys.stdin.readline())
if not n:
    print(0)
else:
    score = [int(sys.stdin.readline()) for _ in range(n)]
    exclusion = round_exclusion(n * 0.15)
    user = sorted(score)[exclusion: n - exclusion]
    print(round_exclusion(sum(user) / len(user)))
```
