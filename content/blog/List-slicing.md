---
external : false
title : "List slicing"
tag : [Programmers, Python]
date : 2025-06-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181897)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n, slicer, num_list):
  # slicer 리스트의 요소를 각각 a, b, c에 할당
  a, b, c = slicer

  # n 값에 따라 num_list를 슬라이싱
  if n == 1:
    # n이 1일 때: num_list의 0번 인덱스부터 b번 인덱스(포함)까지 슬라이싱
    return num_list[:b + 1]
  elif n == 2:
    # n이 2일 때: num_list의 a번 인덱스부터 마지막 인덱스까지 슬라이싱
    return num_list[a:]
  elif n == 3:
    # n이 3일 때: num_list의 a번 인덱스부터 b번 인덱스(포함)까지 슬라이싱
    return num_list[a:b + 1]
  elif n == 4:
    # n이 4일 때: num_list의 a번 인덱스부터 b번 인덱스(포함)까지 c 간격으로 슬라이싱
    return num_list[a:b + 1:c]
  else:
    # n이 1, 2, 3, 4 중 하나라는 제약 조건에 따라 이 부분은 실행되지 않음
    return []
```
