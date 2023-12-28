---
external: false
title: "Baekjoon 11024"
date: 2023-02-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11024)

## 2. Solution

```python
T = int(input())
for _ in range(T):
    lst = list(map(int, input().split()))
    print(sum(lst))
```
