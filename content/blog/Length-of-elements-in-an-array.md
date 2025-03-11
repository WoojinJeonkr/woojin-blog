---
external : false
title : "Length of elements in an array"
tag : [Programmers, Python]
date : 2025-03-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120854)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(strlist):
  # Step1: 빈 배열 answer를 선언
  answer = []
  # Step2: strlist를 반복해서 요소를 하나씩 가져와 요소의 길이를 answer에 넣음
  for i in strlist:
    answer.append(len(i))

  # Step3: answer를 반환환
  return answer
```
