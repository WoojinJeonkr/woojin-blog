---
external : false
title : "Pad array to power of 2"
tag : [Programmers, Python]
date : 2025-04-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181857)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr):
  answer = []
  answer.extend(arr)  # 결과 리스트에 입력 배열 복사
  length = len(answer)  # 현재 리스트 길이
  power_of_two = 1
  while power_of_two < length:
    power_of_two *= 2  # 목표 2의 거듭제곱 계산

  if length < power_of_two:
    zeros_to_add = power_of_two - length  # 추가할 0의 개수
    for _ in range(zeros_to_add):
      answer.append(0)  # 0을 필요한 만큼 추가

  return answer  # 0이 추가된 결과 반환
```
