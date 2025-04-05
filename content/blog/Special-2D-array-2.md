---
external : false
title : "Special 2D array 2"
tag : [Programmers, Python]
date : 2025-04-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181831)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr):
  n = len(arr)  # 행렬의 크기 (n x n 행렬이므로 행의 길이를 구함)
  
  # 이중 반복문으로 행렬의 모든 원소를 확인
  for i in range(n):
    for j in range(n):
      # arr[i][j]와 arr[j][i]가 다르면 대칭 조건을 만족하지 않으므로 0 반환
      if arr[i][j] != arr[j][i]:
        return 0
  
  # 모든 조건을 만족하면 대칭 행렬이므로 1 반환
  return 1
```
