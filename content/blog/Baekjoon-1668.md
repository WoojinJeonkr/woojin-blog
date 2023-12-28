---
external: false
title: "Baekjoon 1668"
date: 2023-03-27
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1668)

## 2. Solution

```python
N = int(input())
lst = [int(input()) for _ in range(N)]
left_cnt = right_cnt = 0
left_max = right_max = 0
for n in lst:
    if n > left_max:
        left_max = n
        left_cnt += 1
for n in lst[::-1]:
    if n > right_max:
        right_max = n
        right_cnt += 1
print(left_cnt)
print(right_cnt)
```
