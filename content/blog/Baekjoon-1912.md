---
external: false
title: "Baekjoon 1912"
date: 2022-12-12
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1912)

## 2. Solution

```python
n = int(input())
number = list(map(int, input().split()))
sum = [number[0]]
for i in range(len(number) - 1):
    sum.append(max(sum[i] + number[i + 1], number[i + 1]))
print(max(sum))
```
