---
external : false
title : "Bursting balloons"
tag : [Programmers, Python]
date : 2025-08-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/68646)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(a):
    n = len(a)
    left_min = [0] * n
    right_min = [0] * n
    
    # 왼쪽 최소값
    left_min[0] = a[0]
    for i in range(1, n):
        left_min[i] = min(left_min[i-1], a[i])
    
    # 오른쪽 최소값
    right_min[n-1] = a[n-1]
    for i in range(n-2, -1, -1):
        right_min[i] = min(right_min[i+1], a[i])
    
    # 살아남을 수 있는 풍선 찾기
    answer = 0
    for i in range(n):
        if a[i] <= left_min[i] or a[i] <= right_min[i]:
            answer += 1
    
    return answer
```
