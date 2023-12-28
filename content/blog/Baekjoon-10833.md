---
external: false
title: "Baekjoon 10833"
date: 2023-02-25
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10833)

## 2. Solution

```python
ans = 0
N = int(input())
for _ in range(N):
    x, y = map(int, input().split())
    ans += y % x
print(ans)
```
