---
external : false
title : "Add and remove in array"
tag : [Programmers, Python]
date : 2025-10-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181860)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr, flag):
    answer = []
    for i in range(len(arr)):
        if flag[i]:
            # flag[i]가 True이면 arr[i]를 arr[i] * 2번 뒤에 추가
            answer.extend([arr[i]] * (arr[i] * 2))
        else:
            # flag[i]가 False이면 뒤에서 arr[i]개의 원소 제거
            for _ in range(arr[i]):
                answer.pop()
    return answer
```
