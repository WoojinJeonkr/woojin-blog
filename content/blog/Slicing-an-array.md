---
external : false
title : "Slicing an array"
tag : [Programmers, Python]
date : 2025-05-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181893)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr, query):
  """
  정수 배열 arr와 query가 주어집니다.
  query를 순회하면서 다음 작업을 반복합니다.
  짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
  홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
  위 작업을 마친 후 남은 arr의 부분 배열을 return 합니다.
  """
  for i in range(len(query)):
    if i % 2 == 0:  # 짝수 인덱스
      # query[i]번 인덱스 뒷부분을 잘라서 버립니다.
      # 즉, arr는 arr[0]부터 arr[query[i]]까지가 됩니다.
      arr = arr[:query[i] + 1]
    else:  # 홀수 인덱스
      # query[i]번 인덱스 앞부분을 잘라서 버립니다.
      # 즉, arr는 arr[query[i]]부터 끝까지가 됩니다.
      arr = arr[query[i]:]
  return arr
```
