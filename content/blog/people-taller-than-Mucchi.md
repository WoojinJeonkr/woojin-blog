---
external : false
title : "people taller than Mucchi"
tag : [Programmers, Python]
date : 2025-03-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120585)에서 확인하실 수 있습니다.

## 2. Problem solving process

입력받은 배열 array에서 수를 한 개씩 꺼내서 height와 비교하고 만약 height보다 수가 크다면 answer에 1을 더한다.
위 과정을 반복하면 최종적으로 몇 명이 키가 더 큰지 확인할 수 있다.

## 3. Answer

```python
def solution(array, height):
  # 키가 height보다 큰 사람의 수를 저장할 변수 초기화
  answer = 0
  
  # array에 있는 각 사람의 키를 순회
  for person in array:
    # 현재 사람의 키가 height보다 큰 경우
    if person > height:
      # 키가 height보다 큰 사람의 수를 증가
      answer += 1
  
  # 키가 height보다 큰 사람의 수를 반환
  return answer
```
