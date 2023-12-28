---
external: false
title: "Baekjoon 2491"
date: 2023-01-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2491)

## 2. Solution

```python
N = int(input())
li = list(map(int, input().split()))
dp1, dp2 = [1]*N, [1]*N
for i in range(1, N):
    if li[i] <= li[i-1]:
        dp1[i] = max(dp1[i], dp1[i-1]+1)
    if li[i] >= li[i-1]:
        dp2[i] = max(dp2[i], dp2[i-1]+1)
print(max(max(dp1), max(dp2)))
```
