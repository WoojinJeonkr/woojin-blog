---
external : false
title : "Adjacent cell"
tag : [Programmers, Python]
date : 2025-01-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250125)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 주어진 보드에서 특정 칸의 색상과 인접한 칸의 색상을 비교하여 동일한 색상의 개수를 세는 과정을 구현하였습니다. 이를 위해, 문제를 이해하고 해결하는 과정을 다음과 같이 구성하였습니다.

먼저, 보드의 크기를 계산하여 칸의 범위를 확인합니다. 이 정보를 통해 유효한 인덱스 값만을 탐색할 수 있도록 합니다. 그런 다음, 특정 칸의 위치를 기준으로 이동 방향(위, 아래, 왼쪽, 오른쪽)을 설정합니다. 각 방향으로 이동한 결과가 보드의 범위를 벗어나지 않는 경우에 한해 탐색을 진행하며, 기준 색상과 일치하는 색상이 발견되면 카운트를 증가시킵니다.

이 과정은 주어진 칸과 네 방향의 인접 칸에 대해 반복적으로 수행됩니다. 최종적으로, 동일한 색상을 가진 인접 칸의 개수를 반환하여 문제를 해결합니다.

## 3. Answer

```python
def solution(board, h, w):
  # 보드의 크기를 계산
  board_len = len(board)
  
  # 이동 방향을 정의 (위, 아래, 왼쪽, 오른쪽)
  dh = [0, 1, -1, 0]
  dw = [1, 0, 0, -1]
  
  # 현재 칸의 색상을 저장
  current_color = board[h][w]
  
  # 같은 색상인 칸의 개수를 저장할 변수
  answer = 0
  
  # 네 방향으로 인접 칸 탐색
  for i in range(4):
    h_check = h + dh[i]
    w_check = w + dw[i]
    
    # 인접 칸이 보드의 범위 내에 있는지 확인
    if 0 <= h_check < board_len and 0 <= w_check < board_len:
      # 인접 칸의 색상이 현재 칸과 동일한 경우
      if board[h_check][w_check] == current_color:
        answer += 1
  
  return answer
```
