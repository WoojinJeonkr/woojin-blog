---
external: false
title: "Baekjoon 1302"
date: 2022-12-23
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1302)

## 2. Solution

```python
N = int(input())
best = {}
for i in range(N):
    book = input()
    if book not in best:
        best[book] = 1
    else:
        best[book] += 1

max_book = []
value = max(best.values())

for i in best:
    if value == best[i]:
        max_book.append(i)

print(sorted(max_book)[0])
```
