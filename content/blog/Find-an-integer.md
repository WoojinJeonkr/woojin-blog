---
external : false
title : "Find an integer"
tag : [Programmers, Python]
date : 2025-07-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181840)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list, n):
    answer = 0
    # num_list에 n이 있는지 확인하기 위해 리스트의 모든 요소를 반복합니다.
    for num in num_list:
    # 현재 요소(num)가 n과 같다면
        if num == n:
            # n을 찾았으므로 answer를 1로 설정합니다.
            answer = 1
            # 더 이상 리스트를 확인할 필요가 없으므로 반복을 즉시 종료합니다.
            break
    # n의 존재 여부를 나타내는 answer 값을 반환합니다 (있으면 1, 없으면 0).
    return answer
```
