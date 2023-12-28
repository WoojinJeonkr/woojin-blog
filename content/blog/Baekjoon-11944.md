---
external: false
title: "Baekjoon 11944"
date: 2023-06-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11944)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
N, M = map(int, input().split())
res = str(N)*N
print(res if len(res) <= M else res[:M])
```
