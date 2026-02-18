---
external : false
title : "Terms of Office"
tag : [Baekjoon, Python]
date : 2026-02-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6888)에서 확인하실 수 있습니다.

## 2. Answer

```py
X = int(input())
Y = int(input())

LCM = 60  # 4, 2, 3, 5의 최소공배수

for year in range(X, Y + 1):
    if (year - X) % LCM == 0:
        print(f"All positions change in year {year}")
```
