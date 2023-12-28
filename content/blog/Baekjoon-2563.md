---
external: false
title: "Baekjoon 2563"
date: 2022-12-04
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2563)

## 2. Solution

```python
N = int(input())
arr = [[0 for _ in range(101)] for _ in range(101)]

for _  in range(N):
    a, b = map(int, input().split())
    for i in range(a, a+10):
        for j in range(b, b+10):
            arr[i][j] = 1
count = 0
for c in arr:
    count += c.count(1)
print(count)
```
