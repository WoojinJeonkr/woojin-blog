---
external : false
title : "Decoding the secret code"
tag : [Programmers, Python]
date : 2025-02-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/388352)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 조건에 따라 가능한 비밀 코드의 조합을 필터링하는 과정을 통해 문제를 해결합니다. 먼저, 1부터 n까지의 정수 중에서 5개의 정수를 선택하는 모든 조합을 생성하여 초기 가능한 비밀 코드 후보군을 형성합니다.

각 시도에서 입력한 정수와 실제 비밀 코드의 교집합이 시스템 응답과 일치하는 조합만 남깁니다. 이러한 필터링 과정을 모든 시도에 대해 반복하면, 최종적으로 남은 조합이 가능한 비밀 코드가 됩니다.

이러한 필터링 과정을 통해 남은 조합의 개수를 계산하면, 비밀 코드로 가능한 정수 조합의 총 개수를 정확히 파악할 수 있습니다.

## 3. Answer

```python
from itertools import combinations

def solution(n, q, ans):
  # 초기 가능한 모든 조합 생성
  all_combinations = list(combinations(range(1, n+1), 5))
  
  # 각 시도에 대해 가능한 조합 필터링
  for query, answer in zip(q, ans):
    # 필터링된 조합을 저장할 리스트
    filtered_combinations = []
    for combination in all_combinations:
      # query와 combination의 교집합의 크기가 answer와 같을 때만 남김
      if len(set(query) & set(combination)) == answer:
        filtered_combinations.append(combination)
    # 필터링된 조합으로 업데이트함
    all_combinations = filtered_combinations
  
  # 남은 조합의 개수 반환
  return len(all_combinations)
```
