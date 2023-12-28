---
external: false
title: "Baekjoon 2960"
date: 2023-04-29
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2960)

## 2. Solution

## 1. Python (memory: 31256KB, time: 40ms)

```python
n, k = map(int, input().split())

is_prime = [True] * (n+1)
count = 0
for i in range(2, n+1):
    if is_prime[i]:
        for j in range(i, n+1, i):
            if is_prime[j]:
                is_prime[j] = False
                count += 1
                if count == k:
                    print(j)
                    exit()
```
