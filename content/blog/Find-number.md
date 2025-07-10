---
external : false
title : "Find number"
tag : [Programmers, Python]
date : 2025-07-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120904)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num, k):
  # num을 문자열로 변환
  num_str = str(num)
  # k도 문자열로 변환
  k_str = str(k)
  
  # k가 num 안에 있는 경우
  if k_str in num_str:
    # 0부터 시작하는 인덱스에 1을 더해 1-based 위치 반환
    return num_str.index(k_str) + 1
  else:
    # 없으면 -1 반환
    return -1
```
