---
external : false
title : "Defense game"
tag : [Programmers, Python]
date : 2025-03-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/142085)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제에서 설명하는 디펜스 게임은 병사와 무적권을 사용하여 적의 공격을 막는 게임입니다. 게임의 목표는 최대한 많은 라운드를 진행하는 것입니다. 이를 위해서는 무적권을 적절히 사용하여 병사의 수를 최대한 유지하는 전략이 필요합니다.

무적권이 모든 라운드를 커버할 수 있는 경우, 즉 무적권의 수가 라운드 수보다 많거나 같은 경우에는 모든 라운드를 무적권으로 막을 수 있습니다. 이 경우, 무적권을 사용하지 않고도 모든 라운드를 성공적으로 진행할 수 있습니다.

무적권이 부족한 경우에는 Priority Queue를 사용하여 적의 수를 관리할 수 있습니다. Priority Queue는 가장 작은 값을 먼저 꺼내는 자료구조로, 이를 통해 병사 수를 최대한 유지하면서 라운드를 진행할 수 있습니다. 각 라운드에서 적의 수가 Priority Queue에 추가되며, Priority Queue의 크기가 무적권의 수를 초과하면 가장 작은 적의 수를 꺼내어 병사 수에서 차감합니다. 만약 남은 병사 수가 현재 라운드의 적의 수보다 적으면 게임이 종료됩니다.

## 3. Answer

```python
from heapq import heappush, heappop

def solution(n, k, enemy):
  stage = len(enemy)
  
  # 무적권이 모든 라운드를 커버할 수 있는 경우
  if k >= stage:
    return stage
  
  # Priority Queue 초기화
  q = []
  
  # 각 라운드별로 적의 수를 처리
  for i in range(stage):
    # Priority Queue에 현재 라운드의 적의 수 추가
    heappush(q, enemy[i])
    
    # Priority Queue의 크기가 무적권의 수를 초과하면
    if len(q) > k:
      # 가장 작은 적의 수를 꺼내어 병사 수에서 차감
      last = heappop(q)
      # 남은 병사 수가 현재 라운드의 적의 수보다 적으면 게임 종료
      if last > n:
        return i
      # 병사 수 차감
      n -= last
  
  # 모든 라운드를 성공적으로 막은 경우
  return stage
```
