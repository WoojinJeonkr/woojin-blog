---
external: false
title: "Baekjoon 2033"
date: 2023-03-21
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2033)

## 2. Solution

```python
def getAnswer(N):
    compare_num = 10
    while N > compare_num:
        if N % compare_num >= compare_num // 2:
            N += compare_num
        N -= (N % compare_num)
        compare_num *= 10
    return N

N = int(input())
print(getAnswer(N=N))
```
