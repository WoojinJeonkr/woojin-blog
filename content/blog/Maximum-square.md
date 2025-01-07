---
external : false
title : "Maximum square"
tag : [Programmers, Python]
date : 2025-01-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12905)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 주어진 보드에서 1로 이루어진 가장 큰 정사각형의 넓이를 찾아야 합니다다.

먼저 DP 테이블을 생성하고 초기화합니다. 이 테이블은 각 위치에서 만들 수 있는 가장 큰 정사각형의 한 변의 길이를 저장합니다. 첫 번째 행과 열은 원본 보드의 값으로 초기화합니다.

나머지 셀들에 대해서는 다음과 같은 규칙을 적용합니다. 현재 셀이 1인 경우, 왼쪽, 위쪽, 왼쪽 위 대각선 방향의 값 중 최소값에 1을 더합니다. 이 값이 현재 위치에서 만들 수 있는 가장 큰 정사각형의 한 변의 길이가 됩니다. 이러한 과정을 반복하며 가장 큰 값을 계속 추적합니다.

최종적으로 찾은 가장 큰 값을 제곱하여 정사각형의 넓이를 구합니다.

## 3. Answer

```python
def solution(board):
  # 보드의 행과 열 수 계산
  rows = len(board)
  cols = len(board[0])
  
  # 보드가 비어있거나 1x1인 경우 처리
  if rows == 0 or cols == 0:
    return 0
  
  # DP 테이블 초기화
  dp = [[0] * cols for _ in range(rows)]
  
  # 첫 번째 행과 열 초기화
  for i in range(rows):
    dp[i][0] = board[i][0]
  for j in range(cols):
    dp[0][j] = board[0][j]
  
  # 최대 정사각형 크기 초기화
  max_size = max(max(dp[0]), dp[0][0])
  
  # DP 테이블 채우기
  for i in range(1, rows):
    for j in range(1, cols):
      if board[i][j] == 1:
        # 현재 위치에서 가능한 최대 정사각형 크기 계산
        dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        # 최대 크기 업데이트
        max_size = max(max_size, dp[i][j])
  
  # 최대 정사각형의 넓이 반환
  return max_size ** 2
```
