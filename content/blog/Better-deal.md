---
external : false
title : "Better deal"
tag : [Codechef, Python]
date : 2026-04-30
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/BETDEAL)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    A, B = map(int, input().split())

    # 첫 번째 가게 최종 가격
    first_price = 100 * (100 - A)

    # 두 번째 가게 최종 가격
    second_price = 200 * (100 - B)

    # 비교 (100으로 나누지 않아도 크기 비교는 동일)
    if first_price < second_price:
        print("FIRST")
    elif first_price > second_price:
        print("SECOND")
    else:
        print("BOTH")
```
