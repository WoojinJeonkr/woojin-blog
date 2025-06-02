---
external : false
title : "Range of 2"
tag : [Programmers, Python]
date : 2025-06-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181894)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(arr):
  answer = []
  # 배열에 2가 없는 경우 -1을 반환
  if 2 not in arr:
    answer.append(-1)
    return answer
  # 첫 번째 2의 인덱스 찾기
  first = arr.index(2)
  # 마지막 2의 인덱스 찾기
  last = len(arr) - 1 - arr[::-1].index(2)
  # 첫 번째 2부터 마지막 2까지의 부분 배열 반환
  answer = arr[first:last+1]
  return answer
```
