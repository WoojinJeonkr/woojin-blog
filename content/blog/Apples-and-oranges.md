---
external : false
title : "Apples and oranges"
tag : [Codechef, Python]
date : 2026-05-03
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/APPLEORANGE)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
import math

# 입력 속도 향상을 위해 readline 사용
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

# 테스트 케이스만큼 반복
for _ in range(T):
    # 사과(N), 오렌지(M) 개수 입력
    N, M = map(int, input().split())

    # N과 M의 최대공약수를 구해 출력 (나눌 수 있는 최대 사람 수)
    print(math.gcd(N, M))
```
