---
external : false
title : "Next prime"
tag : [Baekjoon, Python]
date : 2025-11-17
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/4134)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 밀러–라빈 소수 판별 함수
def is_prime(n):
    if n < 2:
        return False
    if n in (2, 3):  # 2, 3은 소수
        return True
    if n % 2 == 0:  # 짝수는 소수 아님
        return False
    
    # n-1 = d * 2^s 형태로 분해
    d = n - 1
    s = 0
    while d % 2 == 0:
        d //= 2
        s += 1

    # 32비트 정수에서 정확한 베이스
    for a in (2, 7, 61):
        if a % n == 0:
            continue
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue
        # 제곱 반복하며 n-1에 도달하는지 확인
        for _ in range(s - 1):
            x = (x * x) % n
            if x == n - 1:
                break
        else:
            return False
    return True

# n 이상에서 가장 가까운 소수 찾기
def next_prime(n):
    if n <= 2:
        return 2
    if n % 2 == 0:  # 짝수면 홀수로 맞춤
        n += 1
    # 홀수만 검사하면서 소수 찾기
    while True:
        if is_prime(n):
            return n
        n += 2

# 입력 처리
t = int(input())
for _ in range(t):
    n = int(input())
    print(next_prime(n))
```
