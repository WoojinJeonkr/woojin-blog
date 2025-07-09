---
external : false
title : "Odd vs Even"
tag : [Programmers, Python]
date : 2025-07-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181887)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list):
  odd_sum = 0   # 홀수 번째(1,3,5...) 원소들의 합
  even_sum = 0  # 짝수 번째(2,4,6...) 원소들의 합
  for i in range(len(num_list)):
    if i % 2 == 0:      # 인덱스가 짝수면(0,2,4...) 홀수 번째 원소
      odd_sum += num_list[i]
    else:               # 인덱스가 홀수면(1,3,5...) 짝수 번째 원소
      even_sum += num_list[i]
  return max(odd_sum, even_sum)  # 둘 중 더 큰 값 반환
```
