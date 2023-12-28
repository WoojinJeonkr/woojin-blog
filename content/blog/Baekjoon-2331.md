---
external: false
title: "Baekjoon 2331"
date: 2023-01-14
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2331)

## 2. Solution

```python
A, P = map(int, input().split())
lst = [A]
while True:
    tmp = 0
    for i in str(lst[-1]):
        tmp += int(i) ** P
    if tmp in lst:
        break
    lst.append(tmp)
print(lst.index(tmp))
```
