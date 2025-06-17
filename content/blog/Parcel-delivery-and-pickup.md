---
external : false
title : "Parcel delivery and pickup"
tag : [Programmers, Python]
date : 2025-06-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150369)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(cap, n, deliveries, pickups):
  # deliveries와 pickups 리스트를 뒤집어서 가장 먼 집부터 처리
  deliveries = deliveries[::-1]
  pickups = pickups[::-1]
  answer = 0  # 총 이동 거리
  d = 0  # 남은 배달 상자 수
  p = 0  # 남은 수거 상자 수

  for i in range(n):
    d += deliveries[i]  # i번째 집의 배달 상자 누적
    p += pickups[i]     # i번째 집의 수거 상자 누적

    # 배달 또는 수거할 상자가 남아 있으면 반복
    while d > 0 or p > 0:
      d -= cap      # 트럭 용량만큼 배달 상자 처리
      p -= cap      # 트럭 용량만큼 수거 상자 처리
      answer += (n - i) * 2  # 현재 위치까지 왕복 거리 더하기

  return answer
```
