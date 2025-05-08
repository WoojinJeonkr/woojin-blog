---
external : false
title : "Selecting K random numbers"
tag : [Programmers, Python]
date : 2025-05-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181858)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr, k):
  answer = []  # 최종 결과를 저장할 리스트

  for num in arr:
    if num not in answer:  # answer 리스트에 중복되지 않은 경우만 추가
      answer.append(num)
    if len(answer) == k:  # k개의 고유한 숫자를 찾으면 종료
      break

  while len(answer) < k:  # k개의 숫자가 부족하면 -1을 추가
    answer.append(-1)

  return answer  # 완성된 리스트 반환
```
