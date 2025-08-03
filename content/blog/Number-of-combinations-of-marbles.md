---
external : false
title : "Number of combinations of marbles"
tag : [Programmers, Python]
date : 2025-08-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120840)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math  # 수학 관련 함수와 상수를 제공하는 모듈을 임포트

def solution(balls, share):
    # math.comb(n, k)는 n개 중에서 k개를 고르는 조합의 수를 계산
    return math.comb(balls, share)
```
