---
external : false
title : "Nearest number"
tag : [Programmers, Python]
date : 2025-08-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120890)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(array, n):
    answer = 0  # 초기값 설정
    min_diff = float('inf') # 현재까지 찾은 최소 차이 (무한대로 초기화)

    for num in array:
        diff = abs(num - n)

        # 현재 숫자의 차이가 기존 최소 차이보다 작으면
        if diff < min_diff:
            min_diff = diff
            answer = num
        # 현재 숫자의 차이가 기존 최소 차이와 같으면
        elif diff == min_diff:
            # 더 작은 수를 선택
            if num < answer:
                answer = num
                
    return answer
```
