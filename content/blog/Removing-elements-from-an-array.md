---
external : false
title : "Removing elements from an array"
tag : [Programmers, Python]
date : 2025-03-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181844)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr, delete_list):
  # Step1: 빈 리스트 answer를 생성하여 결과를 저장할 공간을 마련합니다.
  answer = []
  
  # Step2: arr의 각 원소 num에 대해 반복합니다.
  for num in arr:
    # Step3: num이 delete_list에 포함되어 있지 않은 경우에만 answer에 추가합니다.
    if num not in delete_list:
      answer.append(num)
  
  # Step4: 최종적으로 answer 리스트를 반환합니다.
  return answer
```
