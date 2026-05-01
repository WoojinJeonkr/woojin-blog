---
external : false
title : "Hackerman"
tag : [Codechef, Python]
date : 2026-05-01
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/PRIMEDICE)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 2부터 12까지의 합 중에서 소수에 해당하는 값들을 미리 집합으로 정의
primes = {2, 3, 5, 7, 11}

# 테스트 케이스 개수 입력
T = int(input())

for _ in range(T):
    # 주사위를 굴린 결과 A, B 입력
    A, B = map(int, input().split())

    # 두 주사위 값의 합이 소수인지 확인
    if A + B in primes:
        # 소수이면 Alice 승리
        print("Alice")
    else:
        # 소수가 아니면 Bob 승리
        print("Bob")
```
