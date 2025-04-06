---
external : false
title : "Add array elements based on values"
tag : [Programmers, Python]
date : 2025-04-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181861)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr):
  answer = []
  for i in arr:
    for _ in range(i):  # i번 반복
      answer.append(i)  # i를 answer에 추가
  return answer
```
