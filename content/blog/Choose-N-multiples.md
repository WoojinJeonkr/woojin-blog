---
external : false
title : "Choose n multiples"
tag : [Programmers, Python]
date : 2025-03-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120905)에서 확인하실 수 있습니다.

## 2. Problem solving process

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 숫자를 제거한 배열을 반환해야 합니다.
이를 위해, 먼저 빈 배열 answer를 생성한 뒤, numlist에서 n의 배수만 골라 answer에 추가하고, 최종적으로 answer를 반환하면 됩니다.

## 3. Answer

```python
def solution(n, numlist):
  # Step 1: 결과를 저장할 빈 리스트를 생성합니다.
  answer = []
  
  # Step 2: numlist의 각 요소를 반복적으로 확인하여 n의 배수인 경우 answer 리스트에 추가합니다.
  for i in numlist:
    if i % n == 0:  # n의 배수인 경우
      answer.append(i)
  
  # Step 3: 결과를 반환합니다.
  return answer
```
