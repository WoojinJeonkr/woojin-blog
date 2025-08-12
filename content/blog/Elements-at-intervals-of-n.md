---
external : false
title : "Elements at intervals of n"
tag : [Programmers, Python]
date : 2025-08-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181888)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list, n):
    answer = []
    # num_list의 첫 번째 원소부터 n개 간격으로 순회합니다.
    for i in range(0, len(num_list), n):
        answer.append(num_list[i])
    return answer
```
