---
external : false
title : "Dual priority queue"
tag : [Programmers, Python]
date : 2025-02-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42628)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 10분
2. 해결 시간: 45분
3. 시도 횟수: 3회

## 3. Problem solving process

해당 문제는 이중 우선순위 큐를 구현하는 문제로, 주어진 연산을 처리한 후 큐의 상태를 반환하는 것을 목표로 합니다. 이중 우선순위 큐는 최대값과 최소값을 효율적으로 관리할 수 있어야 하며, 삽입과 삭제 연산을 지원해야 합니다.

이 문제를 해결하기 위해 Python의 heapq 모듈을 활용할 수 있습니다. heapq는 기본적으로 최소 힙을 제공하므로, 최대값을 얻기 위해서는 값을 음수로 변환하여 최대 힙처럼 사용할 수 있습니다. 따라서 두 개의 힙, 즉 최대 힙과 최소 힙을 유지하여 각각의 연산을 처리합니다.

삽입 연산은 간단하게 최대 힙과 최소 힙에 값을 추가하는 방식으로 처리됩니다. 삭제 연산은 조금 더 복잡합니다. 최대값을 삭제할 때는 최대 힙에서 값을 꺼내고, 최소 힙에서도 해당 값을 제거해야 합니다. 반대로 최소값을 삭제할 때는 최소 힙에서 값을 꺼내고, 최대 힙에서도 해당 값을 제거해야 합니다. 이러한 과정에서 힙이 비어있을 경우 연산은 무시됩니다.

마지막으로, 모든 연산이 처리된 후 큐가 비어있으면 `[0, 0]`을 반환하고, 그렇지 않으면 큐의 최댓값과 최솟값을 반환합니다.

## 4. Answer

```python
import heapq

def solution(operations):
  max_heap = []  # 최대값을 얻기 위한 힙
  min_heap = []  # 최소값을 얻기 위한 힙
  
  for op in operations:
    command, num = op.split()
    num = int(num)
    
    if command == "I":
      # 삽입 연산: 최대 힙과 최소 힙에 값을 추가
      heapq.heappush(max_heap, -num)  
      heapq.heappush(min_heap, num)   
    elif command == "D":
      if not max_heap or not min_heap:
        # 큐가 비어있으면 연산 무시
        continue
      
      if num == 1:
        # 최대값 삭제: 최대 힙에서 값을 꺼내고 최소 힙에서도 제거
        max_val = -heapq.heappop(max_heap)
        min_heap.remove(max_val)
        heapq.heapify(min_heap)
      elif num == -1:
        # 최소값 삭제: 최소 힙에서 값을 꺼내고 최대 힙에서도 제거
        min_val = heapq.heappop(min_heap)
        max_heap.remove(-min_val)
        heapq.heapify(max_heap)
  
  if not max_heap or not min_heap:
    # 큐가 비어있으면 [0, 0] 반환
    return [0, 0]
  else:
    # 최댓값과 최솟값 반환
    return [-max_heap[0], min_heap[0]]
```
