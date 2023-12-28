---
external: false
title: "Baekjoon 11656"
date: 2022-12-28
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11656)

## 2. Solution

```python
s = input()
answer = []

for i in range(len(s)):
    answer.append(s[i:])

answer.sort()

for i in answer:
    print(i)
```
