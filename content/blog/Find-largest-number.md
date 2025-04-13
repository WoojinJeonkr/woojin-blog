---
external : false
title : "Find largest number"
tag : [Programmers, Python]
date : 2025-04-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(array):
  # 가장 큰 수를 찾음
  max_value = max(array)
  # 가장 큰 수의 인덱스를 찾음
  max_index = array.index(max_value)
  # 결과를 배열로 반환
  return [max_value, max_index]
```
