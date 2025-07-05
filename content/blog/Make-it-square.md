---
external : false
title : "Make it square"
tag : [Programmers, Python]
date : 2025-07-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181830)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr):
  rows = len(arr)  # 배열의 행의 수
  cols = len(arr[0]) # 배열의 열의 수

  if rows > cols:
    # 행의 수가 열의 수보다 많을 경우, 각 행의 끝에 0을 추가하여 열의 수를 맞춤
    for i in range(rows):
      arr[i].extend([0] * (rows - cols))
  elif cols > rows:
    # 열의 수가 행의 수보다 많을 경우, 0으로 채워진 새 행을 추가하여 행의 수를 맞춤
    for _ in range(cols - rows):
      arr.append([0] * cols)
  
  # 행의 수와 열의 수가 같을 경우, 아무런 변경 없이 원래 배열을 반환
  return arr
```
