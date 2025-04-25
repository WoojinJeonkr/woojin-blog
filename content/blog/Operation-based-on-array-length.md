---
external : false
title : "Operation based on array length"
tag : [Programmers, Python]
date : 2025-04-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181854)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr, n):
  answer = []
  arr_len = len(arr)
  if arr_len % 2 == 1:  # 배열의 길이가 홀수인 경우
  for i in range(arr_len):
    if i % 2 == 0:  # 짝수 인덱스
      answer.append(arr[i] + n)
    else:  # 홀수 인덱스
      answer.append(arr[i])
  else:  # 배열의 길이가 짝수인 경우
    for i in range(arr_len):
      if i % 2 == 0:  # 짝수 인덱스
        answer.append(arr[i])
      else:  # 홀수 인덱스
        answer.append(arr[i] + n)
  return answer
```
