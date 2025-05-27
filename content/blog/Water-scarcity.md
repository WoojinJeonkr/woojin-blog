---
external : false
title : "Water scarcity"
tag : [Programmers, Python]
date : 2025-05-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340202)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(storage, usage, change):
  # 전체 물 사용량을 추적하는 변수를 0으로 초기화합니다.
  total_usage = 0
  
  # change 리스트의 각 요소를 반복하여 월별 물 사용량을 계산합니다.
  for i in range(len(change)):
    # 현재 달의 물 사용량을 계산합니다.
    # 이전 달 사용량(usage)에 change[i]% 증감률을 적용하고 소수점 이하는 버립니다.
    usage = int(usage * (1 + change[i] / 100)) # 이 부분 변경 시 정답
    
    # 계산된 현재 달의 물 사용량을 총 사용량에 더합니다.
    total_usage += usage
    
    # 만약 총 사용량이 현재 저수지에 저장된 물의 양(storage)을 초과하면,
    # 물이 부족해지는 달(인덱스 i)을 반환합니다.
    if total_usage > storage:
      return i
      
  # 모든 예측 기간(change 리스트의 끝) 동안 물이 부족해지지 않으면 -1을 반환합니다.
  return -1
```
