---
external : false
title : "Henry"
tag : [Baekjoon, Python]
date : 2026-03-17
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10253)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

t = int(input())

for _ in range(t):
    a, b = map(int, input().split())

    while a != 0:
        # 단위분수 분모 계산 (올림)
        x = (b + a - 1) // a

        # 분수 갱신: a/b - 1/x
        a = a * x - b
        b = b * x

        # 기약분수로 약분
        g = math.gcd(a, b)
        a //= g
        b //= g

    # 마지막 단위분수 분모 출력
    print(x)
```
