---
external : false
title : "Rock Scissor Paper"
tag : [Programmers, Python]
date : 2025-08-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120839)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(rsp):
    answer = ''
    # rsp 문자열의 각 문자를 순회합니다.
    for char in rsp:
        # 가위(2)일 경우 바위(0)로 이깁니다.
        if char == '2':
            answer += '0'
        # 바위(0)일 경우 보(5)로 이깁니다.
        elif char == '0':
            answer += '5'
        # 보(5)일 경우 가위(2)로 이깁니다.
        elif char == '5':
            answer += '2'
    return answer
```
