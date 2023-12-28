---
external: false
title: "Baekjoon 2993"
date: 2023-03-05
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2993)

## 2. Solution

```python
w = input()
lst = []
for i in range(len(w)-2):
    for j in range(i+1, len(w)-1):
        for k in range(j+1, len(w)):
            t = w[:j][::-1] + w[j:k][::-1] + w[k:][::-1]
            lst.append(t)
print(min(lst))
```
