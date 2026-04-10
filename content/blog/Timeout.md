---
external : false
title : "Timeout"
tag : [Baekjoon, Python]
date : 2026-04-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11332)에서 확인하실 수 있습니다.

## 2. Answer

```py
# BOJ 11332 - 시간초과
# 시간 복잡도를 계산하여 제한 시간 내에 처리 가능한지 판단하는 프로그램

import sys

# 입력을 한 번에 빠르게 읽기 위해 sys.stdin.read 사용
input = sys.stdin.read
data = input().split()

# 테스트 케이스 수 입력
C = int(data[0])
index = 1

# 각 테스트 케이스를 순회하며 처리
for _ in range(C):
    # 시간 복잡도 문자열(S), N(입력 범위), T(테스트 케이스 수), L(제한 시간) 파싱
    S = data[index]
    N = int(data[index + 1])
    T = int(data[index + 2])
    L = int(data[index + 3])
    index += 4

    # 제한 시간 L초 동안 최대 수행 가능한 연산 수 (1초에 1e8 연산)
    max_ops = L * 100000000

    # 주어진 시간 복잡도에 따라 연산 횟수(ops) 계산
    if S == "O(N)":
        ops = N
    elif S == "O(N^2)":
        ops = N * N
    elif S == "O(N^3)":
        ops = N * N * N
    elif S == "O(2^N)":
        # N이 30 이상이면 2^N이 1e9를 초과하므로 TLE 처리
        if N >= 30:
            ops = max_ops + 1
        else:
            ops = 1 << N
    elif S == "O(N!)":
        # N이 13 이상이면 N!이 매우 커지므로 TLE 처리
        if N >= 13:
            ops = max_ops + 1
        else:
            ops = 1
            for i in range(2, N + 1):
                ops *= i
    else:
        # 잘못된 복잡도인 경우
        ops = max_ops + 1

    # 총 연산 횟수 = 한 번의 연산 수 * 테스트 케이스 수(T)
    total = ops * T

    # 총 연산 횟수가 최대 연산 수를 초과하면 시간 초과(TLE!)
    if total > max_ops:
        print("TLE!")
    else:
        print("May Pass.")
```
