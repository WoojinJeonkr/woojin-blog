---
external : false
title : "PCCE the walk"
tag : [Programmers, Python]
date : 2025-06-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250129)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(route):
  east = 0
  north = 0
  for i in route:
    if i == "N":
      north += 1 # 북쪽으로 1만큼 이동
    elif i == "S" :
      north -= 1 # 남쪽으로 1만큼 이동
    elif i == "E" :
      east += 1 # 동쪽으로 1만큼 이동
    elif i == "W" :
      east -= 1 # 서쪽으로 1만큼 이동
  return [east, north]
```
