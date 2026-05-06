---
external : false
title : "Strong elements"
tag : [Codechef, Python]
date : 2026-05-06
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/STRNG)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline
from math import gcd

T = int(input())

for _ in range(T):
    N = int(input())
    A = list(map(int, input().split()))

    # prefix[i]: A[0]부터 A[i]까지의 gcd
    prefix = [0] * N
    # suffix[i]: A[i]부터 A[N-1]까지의 gcd
    suffix = [0] * N

    # prefix gcd 계산
    prefix[0] = A[0]
    for i in range(1, N):
        prefix[i] = gcd(prefix[i-1], A[i])

    # suffix gcd 계산
    suffix[-1] = A[-1]
    for i in range(N-2, -1, -1):
        suffix[i] = gcd(suffix[i+1], A[i])

    # 전체 배열의 gcd
    total_gcd = prefix[-1]

    result = 0

    for i in range(N):
        # i번째 원소를 제외한 나머지 원소들의 gcd 계산
        if i == 0:
            g_except = suffix[1]
        elif i == N-1:
            g_except = prefix[N-2]
        else:
            g_except = gcd(prefix[i-1], suffix[i+1])

        # strong index 판단
        # 1) i를 제외한 gcd가 전체 gcd와 다르면 → 값 변경으로 gcd 변화 가능
        # 2) 또는 전체 gcd가 1이 아니면 → 값을 적절히 바꿔 gcd를 깨뜨릴 수 있음
        if g_except != total_gcd or total_gcd != 1:
            result += 1

    print(result)
```
