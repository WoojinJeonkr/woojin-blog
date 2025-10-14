---
external : false
title : "Conditions for forming a triangle (2)"
tag : [Programmers, Python]
date : 2025-10-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120868)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(sides):
    a, b = sides  # 주어진 두 변의 길이를 각각 a, b로 저장
    max_side = max(a, b)  # 두 변 중 더 긴 변
    min_side = min(a, b)  # 두 변 중 더 짧은 변

    # 경우 1: 기존의 긴 변이 삼각형에서 가장 긴 변일 때
    # 가능한 나머지 한 변의 길이 개수는 min_side와 동일
    case1 = max_side - (max_side - min_side + 1) + 1

    # 경우 2: 나머지 한 변이 삼각형에서 가장 긴 변일 때
    # 가능한 나머지 한 변의 길이는 (max_side + 1) ~ (max_side + min_side - 1)
    case2 = (max_side + min_side - 1) - (max_side + 1) + 1

    answer = case1 + case2  # 두 경우의 개수를 합산
    return answer
```
