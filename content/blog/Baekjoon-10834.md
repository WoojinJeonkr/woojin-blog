---
external: false
title: "Baekjoon 10834"
date: 2023-06-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10834)

## 2. Solution (Python, memory: 31256KB, time: 84ms)

```python
d, n = 0, 1

for _ in range(int(input())):
    num = list(map(int, input().split()))
    n = int(n * num[1] / num[0])
    d = (d + num[2]) % 2

print(d, n)
```
