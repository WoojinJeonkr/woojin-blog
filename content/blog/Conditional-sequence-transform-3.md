---
external : false
title : "Conditional sequence transform 3"
tag : [Programmers, Python]
date : 2025-10-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181835)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr, k):
    answer = []
    if k % 2 == 1:  # k가 홀수인 경우
        for num in arr:
            answer.append(num * k)  # 각 원소에 k를 곱함
    else:  # k가 짝수인 경우
        for num in arr:
            answer.append(num + k)  # 각 원소에 k를 더함
    return answer
```
