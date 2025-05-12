---
external : false
title : "Finite decimal determination"
tag : [Programmers, Python]
date : 2025-05-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120878)에서 확인하실 수 있습니다.

## 2. Answer

```python
import math

def solution(a, b):
  gcd_val = math.gcd(a, b) # 최대공약수 계산
  denominator = b // gcd_val # 기약분수 분모

  while denominator % 2 == 0:
    denominator //= 2 # 분모에서 2 제거
  while denominator % 5 == 0:
    denominator //= 5 # 분모에서 5 제거

  if denominator == 1:
    return 1 # 유한소수
  else:
    return 2 # 무한소수
```
