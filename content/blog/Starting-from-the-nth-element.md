---
external : false
title : "Starting from the nth element"
tag : [Programmers, Python]
date : 2025-09-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181892)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list, n):
    # n번째(1-based) 원소부터 마지막까지 반환
    answer = num_list[n-1:]
    return answer
```
