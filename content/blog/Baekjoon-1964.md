---
external: false
title: "Baekjoon 1964"
date: 2023-03-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1964)

## 2. Solution

```python
N = int(input())
ans = 5
dot = 7
for i in range(N - 1):
    ans += dot
    dot += 3
    ans %= 45678
print(ans)
```
