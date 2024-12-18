---
external : false
title : "Park walking"
tag : [Programmers, Python]
date : 2024-12-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/172928?language=python3)에서 확인하실 수 있습니다.

## 2. Problem solving process

로봇 강아지의 공원 산책 문제는 2차원 격자에서 로봇 강아지가 주어진 명령을 안전하고 정확히 수행하도록 하는 시뮬레이션 문제입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

- 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
- 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.

문제 해결을 위해 먼저 공원의 초기 상태와 로봇의 시작 위치를 분석해야 합니다. 이후 각 명령의 방향과 거리를 검증하여 이동 경로의 유효성을 판단해야 합니다. 이 과정에서는 경계와 장애물을 철저히 확인하는 것이 중요합니다.

## 3. Answer

```python
def solution(park, routes):
  # 공원의 높이와 너비 저장
  H, W = len(park), len(park[0])
  
  # 시작 지점 찾기
  for i in range(H):
    for j in range(W):
      if park[i][j] == 'S':
        start_y, start_x = i, j
        break
  
  # 방향별 좌표 변화 매핑
  directions = {
    'N': (-1, 0),  # 북쪽: y 감소
    'S': (1, 0),   # 남쪽: y 증가
    'W': (0, -1),  # 서쪽: x 감소
    'E': (0, 1)    # 동쪽: x 증가
  }
  
  # 현재 위치 초기화
  y, x = start_y, start_x
  
  # 각 경로 순회
  for route in routes:
    # 방향과 거리 분리
    direction, distance = route.split()
    distance = int(distance)
    
    # 현재 방향의 좌표 변화
    dy, dx = directions[direction]
    
    # 임시 위치 및 이동 가능 여부 초기화
    temp_y, temp_x = y, x
    can_move = True
    
    # 해당 거리만큼 이동 시도
    for _ in range(distance):
      # 다음 위치 계산
      temp_y += dy
      temp_x += dx
      
      # 공원 범위를 벗어나는지 확인
      if temp_y < 0 or temp_y >= H or temp_x < 0 or temp_x >= W:
        can_move = False
        break
      
      # 장애물을 만나는지 확인
      if park[temp_y][temp_x] == 'X':
        can_move = False
        break
    
    # 이동 가능하다면 위치 업데이트
    if can_move:
      y, x = temp_y, temp_x
  
  # 최종 위치 반환
  return [y, x]
```
