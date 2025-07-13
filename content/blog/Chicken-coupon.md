---
external : false
title : "Chicken coupon"
tag : [Programmers, Python]
date : 2025-07-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120884)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(chicken):
    answer = 0
    coupon = chicken
    
    while coupon >= 10:
        new_chicken = coupon // 10  # 새로 받을 수 있는 서비스 치킨 수
        answer += new_chicken
        coupon = coupon % 10 + new_chicken  # 남은 쿠폰 + 서비스 치킨으로 받은 쿠폰
    
    return answer
```
