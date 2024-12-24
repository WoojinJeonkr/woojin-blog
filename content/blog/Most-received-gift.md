---
external : false
title : "Most received gift"
tag : [Programmers, Python]
date : 2024-12-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/258712?language=python3)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 선물 주고받은 기록을 기반으로 각 친구가 받을 선물의 수를 예측해야 합니다. 주어진 선물 기록을 통해 친구들 간의 선물 주고받은 내역을 정리하고, 주어진 규칙에 맞게 선물 수를 계산합니다.

먼저, 각 친구의 선물 주고받은 기록을 저장할 자료구조가 필요합니다. 이를 위해 2차원 배열을 사용하여 각 친구가 다른 친구에게 준 선물의 수를 기록하고, 선물 지수를 추적할 배열을 만들어 각 친구가 준 선물의 수에서 받은 선물의 수를 계산합니다. 선물 지수는 선물을 많이 주었을수록 큰 값이 나오게 됩니다.

그 다음, 두 사람 사이에 선물을 주고받은 수를 비교하여 주는 사람이 더 많으면 받는 사람이 선물을 하나 더 받도록 합니다. 만약 선물을 주고받은 수가 동일하다면 선물 지수를 기준으로 비교하여, 선물 지수가 더 높은 사람이 선물을 받게 됩니다. 선물 지수도 동일하다면 선물을 주고받지 않게 됩니다.

이 모든 계산을 마친 후, 각 친구가 받은 선물의 수를 계산하여 가장 많은 선물을 받을 친구의 수를 반환합니다.

## 3. Answer

```python
def solution(friends, gifts):
  # 결과를 저장할 변수 초기화
  answer = 0
  n = len(friends)  # 친구의 수
  # 친구 이름을 인덱스로 매핑하는 딕셔너리 생성
  friend_index_map = {friend: i for i, friend in enumerate(friends)}
  
  # 선물 주고받은 내역을 저장할 테이블 생성
  gift_table = [[0] * n for _ in range(n)]
  # 각 친구의 선물 받은/준 수를 기록할 리스트
  gift_balance = [0] * n
  
  # 선물 내역 처리
  for gift in gifts:
    giver, receiver = gift.split()  # 선물 준 사람과 받은 사람 분리
    giver_idx, receiver_idx = friend_index_map[giver], friend_index_map[receiver]  # 인덱스로 변환
    gift_balance[giver_idx] += 1  # 선물 준 사람의 지수 증가
    gift_balance[receiver_idx] -= 1  # 선물 받은 사람의 지수 감소
    gift_table[giver_idx][receiver_idx] += 1  # 주고받은 선물 내역에 기록
  
  # 각 친구가 받은 선물 개수 계산 후 최대값 구하기
  answer = max(
    sum(1 for j in range(n) if i != j and (gift_table[i][j] > gift_table[j][i] or 
    (gift_table[i][j] == gift_table[j][i] and gift_balance[i] > gift_balance[j])))
    for i in range(n)
  )
  
  return answer
```
