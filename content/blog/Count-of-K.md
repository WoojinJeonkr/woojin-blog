---
external : false
title : "Count of K"
tag : [Programmers, Python]
date : 2025-07-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120887)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(i, j, k):
    answer = 0
    
    # i부터 j까지의 숫자를 순회합니다.
    for num in range(i, j + 1):
        # 각 숫자를 문자열로 변환합니다.
        s_num = str(num)
        # 변환된 문자열에서 k(문자열)의 등장 횟수를 세어 answer에 더합니다.
        answer += s_num.count(str(k))

    return answer
```
