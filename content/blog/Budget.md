---
external : false
title : "Budget"
tag : [Programmers, Python]
date : 2024-12-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12982)에서 확인하실 수 있습니다.

## 2. Problem solving process

최대한 많은 부서에 물품을 지원하기 위해서는 각 부서의 요청 금액을 작은 순서대로 처리하는 것이 효율적입니다. 이렇게 하면 예산을 절약하면서 더 많은 부서를 지원할 수 있습니다. 따라서, 먼저 부서별 요청 금액 배열을 오름차순으로 정렬합니다. 이후, 정렬된 배열을 순회하며 요청 금액을 하나씩 예산에서 차감하고, 해당 부서를 지원할 수 있으면 지원한 부서의 개수를 증가시킵니다.

순회 도중 예산이 부족한 경우 더 이상 부서를 지원할 수 없으므로 반복을 종료합니다. 최종적으로 지원한 부서의 개수를 반환하면, 최대 몇 개의 부서를 지원할 수 있는지 알 수 있습니다.

## 3. Answer

```python
def solution(d, budget):
  # 부서별 요청 금액을 오름차순으로 정렬
  d.sort()
  answer = 0
  
  # 요청 금액을 순회하며 지원 가능한 부서 수 계산
  for cost in d:
    if budget >= cost:  # 현재 부서를 지원할 수 있는 경우
      budget -= cost    # 예산에서 해당 금액 차감
      answer += 1        # 지원한 부서 수 증가
    else:
      break  # 예산이 부족하면 종료
  
  return answer
```
