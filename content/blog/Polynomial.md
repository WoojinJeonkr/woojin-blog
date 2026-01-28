---
external : false
title : "Polynomial"
tag : [Baekjoon, Python]
date : 2026-01-28
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/19575)에서 확인하실 수 있습니다.

## 2. Answer

```py
# Horner 방법으로 다항식을 O(N)에 계산
# 모든 연산은 10^9 + 7로 나눈 나머지로 처리

import sys
input = sys.stdin.readline
MOD = 10**9 + 7

# N: 차수, x: 대입할 값
N, x = map(int, input().split())

result = 0
x %= MOD  # x를 미리 모듈러 처리

for _ in range(N + 1):
    A, _ = map(int, input().split())  # 계수 A, 차수는 사용하지 않음
    result = (result * x + A) % MOD  # Horner 공식 적용

print(result)
```
