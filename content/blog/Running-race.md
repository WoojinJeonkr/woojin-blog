---
external : false
title : "Running race"
tag : [Programmers, Python]
date : 2024-12-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/178871)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제의 핵심은 경주 중 선수들의 순위를 효율적으로 업데이트하는 방법을 찾는 것입니다. 이를 위해 딕셔너리를 활용하여 선수 이름과 현재 순위를 매핑하고, 호출된 선수의 이름을 기반으로 순위를 변경하는 방식을 사용합니다. 선수들의 초기 순위 정보를 딕셔너리에 저장하면, 호출된 선수의 현재 순위를 빠르게 조회할 수 있습니다.

## 3. Answer

```java
def solution(players, callings):
  # 선수 이름을 키로, 현재 등수를 값으로 저장하는 딕셔너리 생성
  rank_map = {player: i for i, player in enumerate(players)}
  # 현재 순위를 나타내는 리스트
  current_ranking = players[:]

  for called in callings:
    # 호출된 선수의 현재 등수를 가져옴
    current_index = rank_map[called]
    if current_index > 0:  # 호출된 선수가 1등이 아닌 경우에만 처리
      # 호출된 선수의 바로 앞 선수 이름 가져오기
      previous_player = current_ranking[current_index - 1]
      # 두 선수의 순위를 리스트에서 교환
      current_ranking[current_index - 1], current_ranking[current_index] = (
        current_ranking[current_index],
        current_ranking[current_index - 1],
      )
      # 딕셔너리에서 두 선수의 등수를 업데이트
      rank_map[called] -= 1
      rank_map[previous_player] += 1

  # 최종 순위 반환
  return current_ranking
```
