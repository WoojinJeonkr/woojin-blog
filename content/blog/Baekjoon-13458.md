---
external: false
title: "Baekjoon 13458"
date: 2022-12-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13458)

## 2. Solution

```python
N = int(input())
A = list(map(int, input().split()))
B, C = map(int, input().split())
result = 0
for i in A:
    i -= B
    count = 1
    if i > 0:
        count += i // C
        if i % C != 0:
            count += 1
    result += count
print(result)
```
