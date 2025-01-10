---
external : false
title : "Path to school"
tag : [Programmers, Python]
date : 2025-01-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42898)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 10m
2. 문제 해결 시간: 25m
3. 디버깅 시간: 13m
4. 코드 시도 횟수: 2회

## 3. Problem solving process

해당 문제는 동적계획법법을 활용하여 최단 경로의 개수를 구하는 문제입니다. 문제 해결을 위해서는 먼저 격자의 각 위치까지 도달할 수 있는 경로의 수를 저장할 2차원 배열을 생성해야 합니다. 이때 배열의 크기는 입력받은 격자의 크기보다 1씩 큰 (m+1) × (n+1)로 설정하여 인덱스 처리를 편리하게 합니다.

시작점인 (1,1) 위치의 값을 1로 초기화한 후, 웅덩이 위치는 효율적인 검색을 위해 set 자료구조로 변환합니다. 이때 주어진 웅덩이 좌표의 x,y 순서를 y,x로 바꾸어 저장하는 것이 중요합니다.

각 격자점을 순회하면서 현재 위치가 웅덩이가 아닌 경우, 위쪽과 왼쪽에서 오는 경로의 수를 더하여 현재 위치의 경로 수를 계산합니다. 이때 경로의 수가 매우 커질 수 있으므로, 각 계산 단계마다 1,000,000,007로 나눈 나머지를 저장합니다. 최종적으로 도착점인 (n,m) 위치의 값이 정답이 됩니다.

## 4. Answer

```python
def solution(m, n, puddles):
  # dp 배열 초기화 (m+1 x n+1 크기)
  dp = [[0] * (m + 1) for _ in range(n + 1)]
  dp[1][1] = 1  # 시작점 설정
  
  # 웅덩이 위치를 set으로 변환하여 검색 최적화
  puddles = set(map(tuple, [(y, x) for x, y in puddles]))
  
  # 모든 격자점을 순회하며 경로 수 계산
  for i in range(1, n + 1):
    for j in range(1, m + 1):
      if i == 1 and j == 1:  # 시작점은 건너뛰기
        continue
      if (i, j) in puddles:  # 웅덩이 위치는 0으로 처리
        dp[i][j] = 0
      else:
        # 위쪽과 왼쪽에서 오는 경로의 합을 계산하고 모듈러 연산
        dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007
  
  return dp[n][m]  # 도착점의 경로 수 반환
```
