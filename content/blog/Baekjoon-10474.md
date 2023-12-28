---
external: false
title: "Baekjoon 10474"
date: 2023-05-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10474)

## 2. Solution

### 1. Python (memory: 31256KB, time: 128ms)

```python
while True:
    a, b = map(int, input().split())
    if not(a|b): break
    print(f"{a//b} {a%b} / {b}")
```
