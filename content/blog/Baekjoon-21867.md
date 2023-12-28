---
external: false
title: "Baekjoon 21867"
date: 2023-05-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/21867)

## 2. Solution

### 1. Python (memory: 33036KB, time: 52ms)

```python
N, S = int(input()), input()
result = ''.join(c for c in S if c not in "JAVA")
print(result if result else "nojava")
```
