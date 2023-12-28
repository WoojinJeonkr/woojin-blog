---
external: false
title: "Baekjoon 3004"
date: 2023-06-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/3004)

## 2. Solution

### 1. Python (memory: 31256KB, time: 44ms)

```python
N = int(input())
print((N // 2 + 1) * ((N + 1) // 2 + 1))
```
