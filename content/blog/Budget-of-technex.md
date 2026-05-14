---
external : false
title : "Budget of technex"
tag : [Codechef, Python]
date : 2026-05-15
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/BUDTECH)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 개수 입력
T = int(input())

# 테스트 케이스 수만큼 반복
for _ in range(T):

    # Technex 예산(R, 천 루피 단위) 입력
    R = int(input())

    # 각 이벤트에 배정 가능한 최대 금액 출력
    # 계산식: R * 100
    print(R * 100)
```
