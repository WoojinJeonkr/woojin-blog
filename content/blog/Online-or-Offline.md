---
external : false
title : "Online or Offline"
tag : [Codechef, Python]
date : 2026-04-29
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/FOODPLAN)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 개수를 입력받음
import sys
input = sys.stdin.readline

T = int(input())

# 각 테스트 케이스마다 반복
for _ in range(T):
    # 온라인 주문 가격 N, 식당 가격 M 입력
    N, M = map(int, input().split())

    # 온라인 주문 시 10% 할인 적용
    online_price = N * 0.9

    # 할인된 온라인 가격과 식당 가격 비교
    if online_price < M:
        print("ONLINE")
    elif online_price > M:
        print("DINING")
    else:
        print("EITHER")
```
