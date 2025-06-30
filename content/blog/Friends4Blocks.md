---
external : false
title : "Friends4Blocks"
tag : [Programmers, Python]
date : 2025-06-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17679)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(m, n, board):
  # 보드를 리스트의 리스트로 변환해 쉽게 수정
  board = [list(row) for row in board]
  answer = 0

  while True:
    # 이번 턴에 제거할 블록들의 위치를 저장할 집합
    to_remove = set()
    # 보드를 순회하며 2x2 블록이 형성되는지 확인
    for r in range(m - 1):
      for c in range(n - 1):
        # 이미 제거된 블록(#)은 건너뜀
        if board[r][c] != '#':
          char = board[r][c]
          # 2x2 블록이 같은 문자로 이루어져 있는지 확인
          if board[r+1][c] == char and \
             board[r][c+1] == char and \
             board[r+1][c+1] == char:
            # 제거할 블록들의 위치를 to_remove 집합에 추가
            to_remove.add((r, c))
            to_remove.add((r+1, c))
            to_remove.add((r, c+1))
            to_remove.add((r+1, c+1))

    # 만약 제거할 블록이 없다면 루프 종료
    if not to_remove:
      break

    # 제거된 블록의 개수를 정답에 더함
    answer += len(to_remove)

    # 제거할 블록들을 '#'으로 표시
    for r, c in to_remove:
      board[r][c] = '#'

    # 블록들을 아래로 떨어뜨림
    for c in range(n):
      empty_spaces = [] # 빈 공간의 행 인덱스를 저장할 리스트
      # 아래에서 위로 순회하며 빈 공간을 찾고 블록을 떨어뜨림
      for r in range(m - 1, -1, -1):
        if board[r][c] == '#':
          empty_spaces.append(r) # 빈 공간을 발견하면 리스트에 추가
        elif empty_spaces:
          # 블록을 발견했고 이동할 빈 공간이 있다면 블록을 이동시킴
          board[empty_spaces.pop(0)][c] = board[r][c]
          board[r][c] = '#' # 원래 위치는 빈 공간으로 만듦
          empty_spaces.append(r) # 블록이 이동한 원래 위치를 빈 공간으로 추가
  return answer
```
