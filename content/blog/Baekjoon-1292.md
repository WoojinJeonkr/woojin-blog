---
external: false
title: "Baekjoon 1292"
date: 2023-03-11
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1292)

## 2. Solution

```python
a, b = map(int, input().split())
temp = []
for i in range(1, b + 1):
    for j in range(i):
        temp.append(i)

print(sum(temp[a - 1:b]))
```
