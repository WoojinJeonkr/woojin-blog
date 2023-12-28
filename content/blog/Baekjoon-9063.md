---
external: false
title: "Baekjoon 9063"
date: 2023-09-13
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9063)

## 2. 정답 코드 (Python, memory: 35196KB, time: 1996ms)

```python
n = int(input())
x, y = [], []
for i in range(n):
    a, b= map(int, input().split())
    x.append(a)
    y.append(b)

print((max(x) - min(x)) * (max(y) - min(y))) 
```
