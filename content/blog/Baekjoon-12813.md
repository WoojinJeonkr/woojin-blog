---
external: false
title: "Baekjoon 12813"
date: 2023-06-18
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/12813)

## 2. Solution 1 (Python, memory: 38872KB, time: 248ms)

```python
A, B = input(), input()

print(''.join(str(int(a) & int(b)) for a, b in zip(A, B)))
print(''.join(str(int(a) or int(b)) for a, b in zip(A, B)))
print(''.join(str(int(a) ^ int(b)) for a, b in zip(A, B)))
print(''.join(str(int(not int(a))) for a in A))
print(''.join(str(int(not int(b))) for b in B))
```
