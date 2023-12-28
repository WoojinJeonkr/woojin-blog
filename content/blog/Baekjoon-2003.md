---
external: false
title: "Baekjoon 2003"
date: 2022-12-14
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2003)

## 2. Solution

```python
import sys

n, m = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

cnt = 0
low, high = 0, 1
tmp = arr[low]
while low < n:
    if tmp == m:
        cnt += 1
        tmp -= arr[low]
        low += 1
    
    if high == n and tmp < m:
        break
    elif tmp < m:
        tmp += arr[high]
        high += 1
    elif tmp > m:
        tmp -= arr[low]
        low += 1

print(cnt)
```
