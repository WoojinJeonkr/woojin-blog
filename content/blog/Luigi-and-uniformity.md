---
external : false
title : "Luigi and uniformity"
tag : [Codechef, Python]
date : 2026-05-04
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/DIVIDEMAKEEQ)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline
from math import gcd
from functools import reduce

# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스 반복
for _ in range(T):
    # 배열의 크기 입력
    N = int(input())

    # 배열 원소 입력
    A = list(map(int, input().split()))

    # 배열 전체의 최대공약수(GCD) 계산
    g = reduce(gcd, A)

    # GCD와 다른 원소의 개수 계산 (해당 원소들은 1번의 연산 필요)
    result = sum(1 for x in A if x != g)

    # 최소 연산 횟수 출력
    print(result)
```
