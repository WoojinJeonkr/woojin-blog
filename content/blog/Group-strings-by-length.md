---
external : false
title : "Group strings by length"
tag : [Programmers, Python]
date : 2025-07-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181855)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(strArr):
  # 각 길이별 문자열 개수를 저장할 딕셔너리 초기화
  length_counts = {}

  # strArr의 각 문자열을 반복
  for s in strArr:
    length = len(s)  # 현재 문자열의 길이 계산
    # 딕셔너리에 길이가 이미 존재하면 개수를 1 증가시키고, 없으면 1로 초기화
    length_counts[length] = length_counts.get(length, 0) + 1

  # 딕셔너리가 비어있으면 0을 반환 (strArr이 비어있는 경우)
  if not length_counts:
    return 0
      
  # 딕셔너리의 값(개수) 중에서 최댓값 반환
  return max(length_counts.values())
```
