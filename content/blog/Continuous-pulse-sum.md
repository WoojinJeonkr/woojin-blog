---
external : false
title : "Continuous pulse sum"
tag : [Programmers, Python]
date : 2025-02-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/161988)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간(문제 확인 ~ 첫 쿼리 작성 시점): 15분
2. 해결 시간(첫 쿼리 시도 ~ 문제 정답 확인): 30분
3. 코드 시도 횟수: 3회

## 3. Problem solving process

이 문제는 연속된 부분 수열에 펄스 수열을 곱한 결과의 최대 합을 찾는 것이 목표입니다. 펄스 수열은 1과 -1이 번갈아 나오는 두 가지 형태가 가능하므로, 두 경우를 모두 고려해야 합니다.

해결 방법으로는 먼저 주어진 수열의 길이만큼 두 가지 형태의 펄스 수열을 생성합니다. 그 다음 원본 수열과 각각의 펄스 수열을 곱하여 두 개의 새로운 수열을 만듭니다. 이렇게 변환된 수열에서 연속 부분 수열의 최대 합을 찾는 것이 관건입니다. 최대 부분합을 효율적으로 찾기 위해 카데인 알고리즘을 활용할 수 있습니다. 카데인 알고리즘은 선형 시간 복잡도로 연속 부분 수열의 최대 합을 찾을 수 있어 이 문제에 적합합니다.

마지막으로 두 펄스 수열을 적용한 결과 중 더 큰 값을 선택하여 최종 답을 도출합니다.

## 4. Answer

```python
def solution(sequence):
  # 1. 두 가지 펄스 수열 생성 (길이는 입력 시퀀스와 동일)
  # 첫 번째 펄스: [1, -1, 1, -1, ...]
  pulse1 = [1 if i % 2 == 0 else -1 for i in range(len(sequence))]
  # 두 번째 펄스: [-1, 1, -1, 1, ...]
  pulse2 = [1 if i % 2 == 1 else -1 for i in range(len(sequence))]
  
  # 2. 카데인 알고리즘: 연속 부분 수열의 최대 합을 O(n) 시간에 찾는 알고리즘
  def kadane(arr):
    # max_ending_here: 현재 위치까지의 최대 부분합
    # max_so_far: 전체 구간에서 발견된 최대 부분합
    max_ending_here = max_so_far = arr[0]
    for num in arr[1:]:
      # 현재 원소를 포함하는 것과 새로 시작하는 것 중 큰 값 선택
      max_ending_here = max(num, max_ending_here + num)
      # 전체 최대값 갱신
      max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
  
  # 3. 원본 수열과 각각의 펄스 수열을 곱하여 새로운 수열 생성
  pulse1_sequence = [a * b for a, b in zip(sequence, pulse1)]
  pulse2_sequence = [a * b for a, b in zip(sequence, pulse2)]
  
  # 4. 두 펄스 수열을 적용한 결과 중 더 큰 최대 부분합을 반환
  return max(kadane(pulse1_sequence), kadane(pulse2_sequence))
```
