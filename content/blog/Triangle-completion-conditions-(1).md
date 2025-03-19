---
external : false
title : "Triangle completion conditions (1)"
tag : [Programmers, Python]
date : 2025-03-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120889)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(sides):
  # 주어진 세 변 중에서 가장 긴 변을 찾습니다.
  maxSide = max(sides)
  
  # 가장 긴 변을 제외한 나머지 두 변의 합을 계산합니다.
  sumSide = sum(sides) - maxSide
  
  # 삼각형의 조건을 만족하는지 확인합니다.
  # 가장 긴 변이 나머지 두 변의 합보다 작으면 삼각형을 만들 수 있습니다.
  if sumSide > maxSide:
    # 삼각형을 만들 수 있으므로 1을 반환합니다.
    return 1
  else:
    # 삼각형을 만들 수 없으므로 2를 반환합니다.
    return 2
```
