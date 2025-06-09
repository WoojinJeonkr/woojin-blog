---
external : false
title : "Change order"
tag : [Programmers, Python]
date : 2025-06-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181891)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(num_list, n):
  """
  정수 리스트 num_list와 정수 n이 주어질 때,
  num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눈 후,
  n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 새로운 리스트를 반환합니다.

  Args:
    num_list: 정수들을 담고 있는 리스트입니다.
    n: 리스트를 나눌 기준이 되는 정수 (n번째 원소까지 포함).

  Returns:
    재배열된 원소들을 담고 있는 새로운 리스트입니다.
  """
  return num_list[n:] + num_list[:n]
```
