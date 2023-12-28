---
external: false
title: "Baekjoon 15969"
date: 2023-04-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/15969)

## 2. Solution

```python
N = input()
lst = list(map(int,input().split()))
print(max(lst)-min(lst))
```
