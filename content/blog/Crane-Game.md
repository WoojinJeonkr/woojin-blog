---
external : false
title : "Crane Game"
tag : [Programmers, Python]
date : 2025-04-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/64061)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(board, moves):
  answer = 0  # 터뜨려져 사라진 인형의 개수를 저장할 변수 초기화
  basket = []  # 바구니를 나타내는 리스트 초기화
  n = len(board)  # 게임 보드의 크기(N x N)를 저장

  # 각 열의 최상단 인형 위치를 미리 계산하여 저장할 리스트 초기화 (-1은 해당 열에 인형이 없음을 의미)
  top_doll_indices = [-1] * n
  for col in range(n):  # 각 열을 순회
    for row in range(n):  # 각 행을 순회
      if board[row][col] != 0:  # 해당 칸에 인형이 있다면
        top_doll_indices[col] = row  # 해당 열의 최상단 인형 위치를 저장하고
        break  # 해당 열에서 더 이상 탐색할 필요가 없으므로 내부 루프 종료

  for move in moves:  # 크레인이 작동하는 순서를 담은 리스트를 순회
    col = move - 1  # 크레인이 작동할 열의 인덱스 (moves의 값은 1부터 시작하므로 -1)
    row_index = top_doll_indices[col]  # 현재 해당 열의 최상단 인형의 행 인덱스를 가져옴

    if row_index != -1 and row_index < n:  # 해당 열에 인형이 있고, 인덱스가 보드 범위 내에 있다면
      picked_doll = board[row_index][col]  # 해당 위치의 인형을 집어 올림
      board[row_index][col] = 0  # 집어 올린 인형의 자리를 빈칸(0)으로 만듦

      # 최상단 인형 위치 갱신
      next_top_index = -1  # 다음 최상단 인형의 인덱스를 저장할 변수 초기화 (-1은 없음)
      for r in range(row_index + 1, n):  # 집어 올린 인형의 다음 행부터 아래로 탐색
        if board[r][col] != 0:  # 인형이 있는 칸을 발견하면
          next_top_index = r  # 해당 행 인덱스를 다음 최상단 인형 위치로 저장하고
          break  # 탐색 종료
      top_doll_indices[col] = next_top_index  # 해당 열의 최상단 인형 위치를 갱신

      if basket and basket[-1] == picked_doll:  # 바구니가 비어있지 않고, 바구니의 맨 위 인형과 집은 인형이 같다면
        basket.pop()  # 바구니의 맨 위 인형을 터뜨려 제거
        answer += 2  # 사라진 인형 개수를 2 증가
      else:
        basket.append(picked_doll)  # 바구니에 집어 올린 인형을 추가

  return answer  # 최종적으로 터뜨려져 사라진 인형의 총 개수를 반환
```
