---
external : false
title : "Array similarity"
tag : [Programmers, Python]
date : 2025-03-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120903)에서 확인하실 수 있습니다.

## 2. . Answer

```python
def solution(s1, s2):
  # 두 리스트의 공통 원소의 개수를 구합니다.
  # set() 함수를 사용하여 리스트를 집합으로 변환하고, '&' 연산자를 통해 두 집합의 교집합을 구합니다.
  # 그 결과의 길이를 구하면 공통 원소의 개수가 됩니다.
  answer = len(set(s1) & set(s2))
  
  # 결과를 반환합니다.
  return answer
```
