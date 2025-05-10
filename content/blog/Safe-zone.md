---
external : false
title : "Safe zone"
tag : [Programmers, Python]
date : 2025-05-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120866)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(board):
  n = len(board)
  danger = set()  # 위험지역의 좌표를 저장할 집합

  # 지뢰가 있는 위치 찾기
  for i in range(n):
    for j in range(n):
      if board[i][j] == 1:
        # 지뢰 위치와 그 주변 8방향을 위험지역으로 표시
        for dx in [-1, 0, 1]:
          for dy in [-1, 0, 1]:
            nx, ny = i + dx, j + dy
            if 0 <= nx < n and 0 <= ny < n:  # 배열 범위 내에 있는지 확인
              danger.add((nx, ny))

  # 안전한 지역의 칸 수 계산
  return n * n - len(danger)
```
