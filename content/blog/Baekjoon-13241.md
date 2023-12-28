---
external: false
title: "Baekjoon 13241"
date: 2023-06-08
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13241)

## 2. Solution

### 1. Python (memory: 31256KB, time: 128ms)

```python
import sys
input = sys.stdin.readline

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

a, b = map(int, input().split())
lcm = (a * b) // gcd(a, b)

print(lcm)
```
