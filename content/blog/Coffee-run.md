---
external : false
title : "Coffee run"
tag : [Programmers, Python]
date : 2025-07-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181837)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(order):
  # 메뉴와 가격을 딕셔너리로 정의
  menu_price = {
    "iceamericano": 4500,
    "americanoice": 4500,
    "hotamericano": 4500,
    "americanohot": 4500,
    "americano": 4500,       # 온도 미지정 → 차가운 아메리카노
    "anything": 4500,        # 아무거나 → 차가운 아메리카노
    "icecafelatte": 5000,
    "cafelatteice": 5000,
    "hotcafelatte": 5000,
    "cafelattehot": 5000,
    "cafelatte": 5000        # 온도 미지정 → 차가운 카페라떼
  }

  total = 0  # 총 결제 금액

  # 각 주문에 대해 금액 합산
  for item in order:
    total += menu_price[item]

  return total
```
