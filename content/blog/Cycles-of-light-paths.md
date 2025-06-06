---
external : false
title : "Cycles of light paths"
tag : [Programmers, Python]
date : 2025-06-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/86052)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(grid):
  # 상(0), 우(1), 하(2), 좌(3) 방향에 대한 행, 열 변화값
  dx = [-1, 0, 1, 0]
  dy = [0, 1, 0, -1]
  n = len(grid)      # 격자의 행 개수
  m = len(grid[0])   # 격자의 열 개수

  # 각 칸의 각 방향(상, 우, 하, 좌)에서 방문 여부를 저장하는 3차원 리스트
  # visited[x][y][d]가 True면 (x, y)칸에서 d방향으로 들어오는 경로는 이미 탐색됨을 의미
  visited = [[[False]*4 for _ in range(m)] for _ in range(n)]
  answer = []

  # 모든 칸, 모든 방향에서 출발하여 아직 방문하지 않은 경로를 탐색
  for x in range(n):
    for y in range(m):
      for d in range(4):
        # 방문하지 않은 경로에서만 사이클 탐색 시작
        if not visited[x][y][d]:
          cnt = 0  # 현재 사이클의 길이
          cx, cy, cd = x, y, d  # 현재 위치와 방향
          # 현재 경로가 사이클을 이루기 전까지 반복
          while not visited[cx][cy][cd]:
            visited[cx][cy][cd] = True  # 현재 칸, 방향 방문 처리
            cnt += 1  # 사이클 길이 증가

            # 현재 칸의 문자에 따라 방향 변경
            if grid[cx][cy] == 'L':
              cd = (cd - 1) % 4  # 'L'이면 좌회전(방향 -1)
            elif grid[cx][cy] == 'R':
              cd = (cd + 1) % 4  # 'R'이면 우회전(방향 +1)
            # 'S'면 방향 변화 없음

            # 다음 위치로 이동 (격자 밖으로 나가면 반대편으로 이동)
            cx = (cx + dx[cd]) % n
            cy = (cy + dy[cd]) % m

          # 사이클이 완성되면 그 길이를 결과 리스트에 추가
          if cnt > 0:
            answer.append(cnt)

  # 모든 사이클의 길이를 오름차순 정렬 후 반환
  answer.sort()
  return answer
```
