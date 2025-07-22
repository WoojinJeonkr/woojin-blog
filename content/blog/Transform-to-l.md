---
external : false
title : "Transform to l"
tag : [Programmers, Python]
date : 2025-07-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181834)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(myString):
    answer = ''
    for char in myString:
        if char < 'l':  # 'l'보다 앞서는 문자인지 확인
            answer += 'l'
        else:
            answer += char
    return answer
```
