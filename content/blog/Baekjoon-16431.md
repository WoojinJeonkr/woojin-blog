---
external: false
title: "Baekjoon 16431"
date: 2023-03-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/16431)

## 2. Solution

```python
Br, Bc = map(int, input().split())
Dr, Dc = map(int, input().split())
Jr, Jc = map(int, input().split())
B = max(abs(Jr-Br), abs(Jc-Bc))
D = abs(Jr-Dr) + abs(Jc-Dc)
if B == D:
    print("tie")
elif B < D:
    print("bessie")
else:
    print("daisy")
```
