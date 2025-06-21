---
external : false
title : "PCCP Oil drilling"
tag : [Programmers, Python]
date : 2025-06-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250136)에서 확인하실 수 있습니다.

## 2. Answer

```python
from collections import deque

def solution(land):
  rows = len(land) # 지형의 행 개수
  cols = len(land[0]) # 지형의 열 개수

  # 방문 여부를 기록할 2D 배열 (False로 초기화)
  visited = [[False] * cols for _ in range(rows)]

  # 각 열에서 얻을 수 있는 총 석유량을 저장할 배열
  # 모든 열에 대해 0으로 초기화
  column_oil_yield = [0] * cols

  # BFS/DFS 탐색을 위한 방향 (상, 하, 좌, 우)
  dr = [-1, 1, 0, 0] # 행 이동
  dc = [0, 0, -1, 1] # 열 이동

  # 모든 셀을 순회하며 석유 덩어리 탐색
  for r in range(rows):
    for c in range(cols):
      # 방문하지 않은 석유 (1)를 발견하면 BFS 시작
      if land[r][c] == 1 and not visited[r][c]:
        q = deque([(r, c)]) # BFS 큐 초기화
        visited[r][c] = True # 현재 위치 방문 처리

        # 현재 석유 덩어리가 걸쳐 있는 유일한 열들을 저장할 집합
        current_component_cols = set()
        # 현재 석유 덩어리의 총 석유량
        current_oil_count = 0

        while q:
          curr_r, curr_c = q.popleft() # 큐에서 현재 위치 꺼내기
          current_oil_count += 1 # 석유량 1 증가
          current_component_cols.add(curr_c) # 현재 열을 집합에 추가

          # 상하좌우 이웃 탐색
          for i in range(4):
            nr, nc = curr_r + dr[i], curr_c + dc[i]

            # 유효한 범위 내에 있고, 방문하지 않은 석유 셀인지 확인
            if 0 <= nr < rows and 0 <= nc < cols and \
               land[nr][nc] == 1 and not visited[nr][nc]:
              visited[nr][nc] = True # 방문 처리
              q.append((nr, nc)) # 큐에 추가

        # 하나의 연결된 석유 덩어리 탐색이 완료되면:
        # 이 덩어리가 걸쳐 있는 모든 열에 해당 석유량을 더함
        for col_idx in current_component_cols:
          column_oil_yield[col_idx] += current_oil_count

  # column_oil_yield 배열에서 가장 큰 값이 정답
  return max(column_oil_yield)
```
