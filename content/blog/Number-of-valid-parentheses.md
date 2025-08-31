---
external : false
title : "Number of valid parentheses"
tag : [Programmers, Python]
date : 2025-08-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12929)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n):
    # dp[i] : i개의 괄호 쌍으로 만들 수 있는 올바른 괄호 문자열의 개수
    dp = [0] * (n + 1)
    # 괄호 쌍이 0개일 때는 올바른 문자열이 1개("") 존재
    dp[0] = 1
    
    # 카탈란 수 점화식을 이용해 dp 채우기
    # C_0 = 1
    # C_n = Σ (C_i * C_{n-1-i}), 0 <= i < n
    # i개의 괄호 쌍을 왼쪽에 두고, 나머지 (n-1-i) 쌍을 오른쪽에 두는 경우의 수를 모두 합산
    for i in range(1, n + 1):
        for j in range(i):
            # C_i = Σ (C_j * C_(i-1-j))
            dp[i] += dp[j] * dp[i - 1 - j]
    
    # n개의 괄호 쌍으로 만들 수 있는 올바른 괄호 문자열 개수 반환
    return dp[n]
```
