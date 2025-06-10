---
external : false
title : "N Queen"
tag : [Programmers, Python]
date : 2025-06-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12952)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
  answer = 0
  
  # 각 열의 사용 여부를 저장. col_used[c]가 True이면 c열에 퀸이 이미 놓여있음을 의미
  col_used = [False] * n
  
  # 주 대각선 (좌상단에서 우하단 방향, row - col 값이 일정)의 사용 여부를 저장
  # row - col의 범위는 -(n-1)부터 (n-1)까지이므로, 인덱스를 0부터 시작하도록 n-1을 더함
  diag1_used = [False] * (2 * n - 1) 
  
  # 역 대각선 (우상단에서 좌하단 방향, row + col 값이 일정)의 사용 여부를 저장
  # row + col의 범위는 0부터 2*(n-1)까지
  diag2_used = [False] * (2 * n - 1) 

  # 백트래킹을 사용하여 퀸을 배치하는 함수
  def solve_n_queens(row):
    nonlocal answer
    
    # 모든 행에 퀸을 성공적으로 배치했다면 (마지막 행까지 처리했다면)
    if row == n:
      answer += 1  # 경우의 수를 1 증가
      return
    
    # 현재 행(row)의 모든 열(col)에 퀸을 놓는 것을 시도
    for col in range(n):
      # 현재 위치 (row, col)에 퀸을 놓을 수 있는지 검사
      # 1. 해당 열이 이미 사용 중이 아닌지 확인
      # 2. 해당 주 대각선이 이미 사용 중이 아닌지 확인 (row - col + n - 1은 대각선 인덱스)
      # 3. 해당 역 대각선이 이미 사용 중이 아닌지 확인 (row + col은 역 대각선 인덱스)
      if not col_used[col] and \
         not diag1_used[row - col + n - 1] and \
         not diag2_used[row + col]:
        
        # 퀸을 현재 위치에 배치하고, 해당 열과 대각선들을 사용 중으로 표시
        col_used[col] = True
        diag1_used[row - col + n - 1] = True
        diag2_used[row + col] = True
        
        # 다음 행으로 이동하여 퀸을 배치하는 것을 시도 (재귀 호출)
        solve_n_queens(row + 1)
        
        # 백트래킹: 현재 위치의 퀸을 제거하고, 해당 열과 대각선들을 사용 가능 상태로 되돌림
        # 다른 열에 퀸을 배치하는 경우를 시도하기 위함
        col_used[col] = False
        diag1_used[row - col + n - 1] = False
        diag2_used[row + col] = False

  # 0번째 행부터 퀸 배치를 시작
  solve_n_queens(0)
  
  return answer
```
