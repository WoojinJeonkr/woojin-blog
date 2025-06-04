---
external : false
title : "Billiards practice"
tag : [Programmers, Python]
date : 2025-06-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/169198)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(m, n, startX, startY, balls):
  answer = []

  # 시작점 → 목표점 → 반사점이 일직선이고, 목표점이 그 사이에 있을 경우 해당 경로는 제외
  def is_blocked(sx, sy, tx, ty, rx, ry):
    dx1, dy1 = tx - sx, ty - sy  # 시작점 → 목표점 벡터
    dx2, dy2 = rx - sx, ry - sy  # 시작점 → 반사점 벡터

    cross = dx1 * dy2 - dx2 * dy1  # 외적: 세 점이 일직선 상에 있는지 판별
    dot = dx1 * dx2 + dy1 * dy2    # 내적: 같은 방향인지 확인
    dist1_sq = dx1 * dx1 + dy1 * dy1  # 시작점 → 목표점 거리 제곱
    dist2_sq = dx2 * dx2 + dy2 * dy2  # 시작점 → 반사점 거리 제곱

    return cross == 0 and dot > 0 and dist1_sq < dist2_sq

  for targetX, targetY in balls:
    min_dist_sq = float('inf')  # 최소 거리 제곱을 무한대로 초기화

    # 각 벽에 대해 목표 공을 반사시킨 좌표 계산
    reflections = [
      (targetX, -targetY),              # 아래쪽 벽 반사
      (targetX, 2 * n - targetY),       # 위쪽 벽 반사
      (-targetX, targetY),              # 왼쪽 벽 반사
      (2 * m - targetX, targetY),       # 오른쪽 벽 반사
    ]

    for rx, ry in reflections:
      if is_blocked(startX, startY, targetX, targetY, rx, ry):
        continue  # 목표 공을 지나쳐서 맞는 경로는 제외

      dx = rx - startX
      dy = ry - startY
      dist_sq = dx * dx + dy * dy  # 거리 제곱 계산
      min_dist_sq = min(min_dist_sq, dist_sq)  # 최소 거리 제곱 갱신

    answer.append(min_dist_sq)  # 해당 공에 대한 최소 거리 제곱 추가

  return answer
```
