---
external: false
title: "Baekjoon 5598"
date: 2023-03-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5598)

## 2. Solution

```python
lst = list(input())
for i in range(len(lst)):
    k = ord(lst[i]) - 3
    if k < ord('A'):
        k += 26
    lst[i] = chr(k)
print(''.join(lst))
```
