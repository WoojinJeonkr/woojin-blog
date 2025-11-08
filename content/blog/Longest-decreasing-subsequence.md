---
external : false
title : "Longest decreasing subsequence"
tag : [Baekjoon, Python]
date : 2025-11-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11722)에서 확인하실 수 있습니다.

## 2. Answer

```py
N = int(input())                # 수열의 크기 입력
A = list(map(int, input().split()))  # 수열 입력

dp = [1] * N  # 각 원소를 마지막으로 하는 감소 수열의 길이

for i in range(1, N):
    for j in range(i):
        if A[j] > A[i]:  # 감소 조건
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))  # 가장 긴 감소 부분 수열의 길이 출력
```
