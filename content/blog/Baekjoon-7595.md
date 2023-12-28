---
external: false
title: "Baekjoon 7595"
date: 2022-11-30
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/7595)

## 2. Solution

단순 구현 문제이다.
while문을 통해 n이 0보다 크면 값을 받아 별표를 출력하고 n이 0이면 break를 통해 중단하도록 설계한다.

```python
while True:
    n = int(input())
    if n > 0:
        for i in range(n):
            print('*'*(i+1))
    else: 
        break
```
