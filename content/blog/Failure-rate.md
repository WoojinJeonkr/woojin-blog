---
external : false
title : "Failure rate"
tag : [Programmers, Python]
date : 2025-01-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42889)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제에서 실패율은 특정 스테이지에 도달했으나 클리어하지 못한 플레이어의 수를 그 스테이지에 도달한 전체 플레이어의 수로 나눈 값으로 정의됩니다. 이를 위해, 전체 플레이어 수를 초기화하고 각 스테이지에 대해 해당 스테이지에 도달했지만 클리어하지 못한 플레이어 수를 계산합니다. 그런 다음, 실패율을 계산하고 이를 리스트에 스테이지 번호와 함께 저장합니다.

모든 스테이지의 실패율을 계산한 후, 실패율을 기준으로 내림차순 정렬합니다. 동일한 실패율을 가진 스테이지가 있을 경우 스테이지 번호가 작은 순서대로 정렬되도록 처리합니다. 마지막으로 정렬된 리스트에서 스테이지 번호만 추출해 반환합니다.

## 3. Answer

```python
def solution(N, stages):
  # 실패율을 저장할 리스트
  failure_rates = []
  # 전체 플레이어 수
  total_players = len(stages)

  for stage in range(1, N + 1):
    # 현재 스테이지에 도달했지만 클리어하지 못한 플레이어 수
    not_cleared = stages.count(stage)
    if total_players > 0:
      # 실패율 계산
      failure_rate = not_cleared / total_players
    else:
      # 플레이어가 없는 경우 실패율은 0
      failure_rate = 0
    # 스테이지 번호와 실패율 추가
    failure_rates.append((stage, failure_rate))
    # 다음 스테이지로 넘어가기 위해 현재 스테이지 플레이어 수 차감
    total_players -= not_cleared

  # 실패율 내림차순 정렬 (동일한 실패율일 경우 스테이지 번호 오름차순)
  failure_rates.sort(key=lambda x: (-x[1], x[0]))
  # 정렬된 스테이지 번호만 추출하여 반환
  answer = [stage for stage, _ in failure_rates]
  return answer
```
