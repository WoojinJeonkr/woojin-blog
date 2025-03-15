---
external : false
title : "Check square number"
tag : [Programmers, Python]
date : 2025-03-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120909)에서 확인하실 수 있습니다.

## 2. Answer

```python
import math

def solution(n):
  # n의 제곱근을 계산합니다.
  sqrt_n = math.sqrt(n)
  
  # 제곱근이 정수라면, n은 제곱수입니다.
  if sqrt_n == int(sqrt_n):
    # n이 제곱수일 경우 1을 반환합니다.
    return 1
  else:
    # n이 제곱수가 아닐 경우 2를 반환합니다.
    return 2
```
