---
external : false
title : "PCCP Finding collision risks"
tag : [Programmers, Python]
date : 2025-06-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340211)에서 확인하실 수 있습니다.

## 2. Answer

```python
from collections import Counter

def solution(points, routes):
  # points: 각 포인트의 좌표 (1-based index)
  # routes: 각 로봇의 운송 경로 (포인트 번호)

  def get_robot_path(start_point_idx, end_point_idx):
    # 두 포인트 사이의 로봇 경로를 계산하는 함수
    sx, sy = points[start_point_idx - 1]  # 시작 포인트 좌표
    ex, ey = points[end_point_idx - 1]    # 도착 포인트 좌표

    path = []
    
    # r 좌표를 먼저 이동
    while sx != ex:
      path.append((sx, sy))
      if sx < ex:
        sx += 1
      else:
        sx -= 1
    
    # c 좌표를 이동
    while sy != ey:
      path.append((sx, sy))
      if sy < ey:
        sy += 1
      else:
        sy -= 1
    
    path.append((ex, ey)) # 마지막 도착점 추가

    return path

  all_robot_movements = [] # (r, c, time) 형태로 모든 로봇의 이동을 기록

  for robot_idx, route in enumerate(routes):
    robot_current_position_idx = route[0]
    robot_path_with_time = []
    
    # 첫 번째 포인트에서의 시작
    robot_path_with_time.append((points[robot_current_position_idx - 1][0], points[robot_current_position_idx - 1][1], 0))

    current_time = 0
    for i in range(len(route) - 1):
      start_point_idx = route[i]
      end_point_idx = route[i+1]
      
      # 현재 포인트에서 다음 포인트까지의 경로 계산
      segment_path = get_robot_path(start_point_idx, end_point_idx)
      
      # 첫 번째 이동은 이미 출발점으로 처리했으므로 두 번째부터 추가
      for j in range(1, len(segment_path)):
        current_time += 1
        robot_path_with_time.append((segment_path[j][0], segment_path[j][1], current_time))
    
    all_robot_movements.extend(robot_path_with_time)

  # (r, c, time)을 키로 하여 각 위치에 몇 대의 로봇이 있는지 세기
  movement_counts = Counter(all_robot_movements)

  collision_count = 0
  for count in movement_counts.values():
    if count >= 2:
      collision_count += 1

  return collision_count
```
