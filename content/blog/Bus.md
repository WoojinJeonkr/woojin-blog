---
external : false
title : "Bus"
tag: [Programmers, Python]
date : 2025-05-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340201)에서 확인하실 수 있습니다.

## 2. Answer

```python
def func1(num):
  # num이 0보다 작으면 0을 반환하고, 그렇지 않으면 num을 그대로 반환합니다.
  # 이 함수는 주로 남은 좌석의 개수가 음수가 되는 것을 방지할 때 사용됩니다.
  if 0 > num:
    return 0
  else:
    return num

def func2(num):
  # num이 0보다 크면 0을 반환하고, 그렇지 않으면 num을 그대로 반환합니다.
  # 이 문제는 현재 이 함수를 직접 사용하지 않습니다.
  if num > 0:
    return 0
  else:
    return num

def func3(station):
  # 주어진 정거장 정보(station)에서 "Off"(하차 승객)의 개수를 세어 반환합니다.
  # 즉, 해당 정거장에서 내린 승객의 수를 계산합니다.
  num = 0
  for people in station:
    if people == "Off":
      num += 1
  return num

def func4(station):
  # 주어진 정거장 정보(station)에서 "On"(승차 승객)의 개수를 세어 반환합니다.
  # 즉, 해당 정거장에서 탄 승객의 수를 계산합니다.
  num = 0
  for people in station:
    if people == "On":
      num += 1
  return num

def solution(seat, passengers):
  # 버스에 현재 탑승하고 있는 승객의 수를 나타냅니다. 기점에서 출발 시 0명입니다.
  num_passenger = 0
  
  # 영진이가 기다리는 정거장까지 각 정거장의 승하차 정보를 순회합니다.
  for station in passengers:
    # 각 정거장에서 승차한 승객 수를 현재 탑승 승객 수에 더합니다.
    num_passenger += func4(station)
    # 각 정거장에서 하차한 승객 수를 현재 탑승 승객 수에서 뺍니다.
    num_passenger -= func3(station)

  # 영진이가 버스에 타기 전에 버스에 남아있는 빈 좌석의 개수를 계산합니다.
  # 총 좌석(seat)에서 현재 탑승하고 있는 승객 수(num_passenger)를 뺍니다.
  # 만약 이 결과가 음수가 되면 (예: 승객 수가 좌석 수보다 많으면), func1을 사용하여 0으로 만듭니다.
  # 이는 "남는 좌석이 있다면 항상 앉는다"는 가정을 만족시키며, 좌석 초과 시 빈 좌석이 0개가 됨을 의미합니다.
  answer = func1(seat - num_passenger)

  return answer
```
