---
external : false
title : "Make array 3"
tag : [Programmers, Python]
date : 2025-09-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181895)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr, intervals):
    answer = []
    # 첫 번째 구간 원소들 추가
    answer.extend(arr[intervals[0][0]:intervals[0][1] + 1])
    # 두 번째 구간 원소들 추가
    answer.extend(arr[intervals[1][0]:intervals[1][1] + 1])
    return answer
```
