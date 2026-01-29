---
external : false
title : "Copier"
tag : [Baekjoon, Python]
date : 2026-01-29
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26574)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 숫자의 개수 n 입력
n = int(input().strip())

# n개의 숫자를 받아서 각 숫자를 두 번 출력
for _ in range(n):
    num = input().strip()
    print(num, num)
```
