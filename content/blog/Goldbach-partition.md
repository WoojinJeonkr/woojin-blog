---
external : false
title : "Goldbach partition"
tag : [Baekjoon, Python]
date : 2025-11-15
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17103)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 에라토스테네스의 체로 1,000,000까지 소수 판별
MAX_N = 1_000_000
is_prime = [True] * (MAX_N + 1)
is_prime[0] = is_prime[1] = False

for i in range(2, int(MAX_N**0.5) + 1):
    if is_prime[i]:
        for j in range(i * i, MAX_N + 1, i):
            is_prime[j] = False

# 테스트 케이스 처리
T = int(input())
for _ in range(T):
    N = int(input())
    count = 0

    # p ≤ N - p 조건만 검사 → 순서 뒤바뀐 중복 방지
    for p in range(2, N // 2 + 1):
        if is_prime[p] and is_prime[N - p]:
            count += 1

    print(count)
```
