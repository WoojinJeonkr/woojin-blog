---
external: false
title: "Baekjoon 1350"
date: 2023-02-21
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1350)

## 2. Solution

```python
n = int(input())
lst = list(map(int, input().split()))
m = int(input())
sum = 0
for i in lst:
    if i % m == 0:
        sum += i // m
    else:
        sum += i // m + 1
print(sum * m)
```
