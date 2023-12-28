---
external: false
title: "Baekjoon 10867"
date: 2022-12-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10867)

## 2. Solution

```python
N = int(input())
lst = map(int, input().split())
print(*sorted(list(set(lst))))
```
