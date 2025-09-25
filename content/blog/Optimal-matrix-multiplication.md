---
external : false
title : "Optimal matrix multiplication"
tag : [Programmers, Python]
date : 2025-09-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12942)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(matrix_sizes):
    n = len(matrix_sizes)  # 행렬의 개수
    dp = [[0] * n for _ in range(n)]  # dp[i][j]는 i~j번째 행렬을 곱할 때 최소 곱셈 연산 수

    # 행렬을 곱하는 구간의 길이를 2부터 n까지 증가시키며 탐색
    for length in range(2, n + 1):  # length는 곱하려는 행렬 구간의 길이
        for i in range(n - length + 1):  # 시작 행렬 인덱스
            j = i + length - 1  # 끝 행렬 인덱스
            dp[i][j] = float('inf')  # 초기값은 무한대로 설정 (최솟값 갱신 목적)

            # i부터 j까지의 행렬을 어떤 k에서 나누어 곱할지 결정
            for k in range(i, j):
                # 곱셈 비용 계산:
                # 1. i~k 구간 최소 곱셈 수
                # 2. k+1~j 구간 최소 곱셈 수
                # 3. 두 결과 행렬을 곱하는 비용
                cost = (
                    dp[i][k]  # A_i × ... × A_k 최소 연산
                    + dp[k + 1][j]  # A_{k+1} × ... × A_j 최소 연산
                    + matrix_sizes[i][0] * matrix_sizes[k][1] * matrix_sizes[j][1]  # 최종 두 행렬 곱셈 비용
                )

                # 더 작은 연산 횟수로 갱신
                dp[i][j] = min(dp[i][j], cost)
    
    # 전체 행렬(0부터 n-1까지)을 곱한 최소 연산 횟수 반환
    return dp[0][n - 1]
```
