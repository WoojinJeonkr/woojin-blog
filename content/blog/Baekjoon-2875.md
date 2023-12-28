---
external: false
title: "Baekjoon 2875"
date: 2023-01-11
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2875)

## 2. Solution

```python
n, m, k = map(int, input().split())
cnt = 0
while n + m >= k and n >= 0 and m >= 0:
    n -= 2
    m -= 1
    cnt += 1
print(cnt - 1)
```
