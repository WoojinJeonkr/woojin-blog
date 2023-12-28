---
external: false
title: "Baekjoon 16673"
date: 2023-05-28
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/16673)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
c, k, p = map(int, input().split())
print(sum((k * i) + (p * i ** 2) for i in range(1, c + 1)))
```
