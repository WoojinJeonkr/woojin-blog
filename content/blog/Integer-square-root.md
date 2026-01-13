---
external : false
title : "Integer square root"
tag : [Baekjoon, Python]
date : 2026-01-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2417)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 정수 제곱근 계산용 모듈
import math

# 정수 n 입력
n = int(input().strip())
# q^2 ≤ n 인 최대 정수 q
q = math.isqrt(n)

# q^2 ≥ n 조건 맞추기
if q * q < n:
    q += 1

# 결과 출력
print(q)
```
