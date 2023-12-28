---
external: false
title: "Baekjoon 4892"
date: 2023-03-19
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/4892)

## 2. Solution

```python
i = 1
while 1:
    n = int(input())
    if n == 0:
        break
    n1 = 3*n
    n2 = (n1+1)//2 if n1%2 else n1//2
    n3 = 3*n2
    n4 = n3//9
    if n == 2*n4:
        print(f"{i}. even {n4}")
    else:
        print(f"{i}. odd {n4}")
    i += 1
```
