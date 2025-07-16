---
external : false
title : "Find by swap string"
tag : [Programmers, Python]
date : 2025-07-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181864)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(myString, pat):
    # myString의 'A'를 'B'로, 'B'를 'A'로 바꿉니다.
    # 이를 위해 먼저 임시 문자열을 만들고 각 문자를 변환합니다.
    temp_string = []
    for char in myString:
        if char == 'A':
            temp_string.append('B')
        else: # char == 'B'
            temp_string.append('A')
    
    transformed_string = "".join(temp_string)
    
    # 변환된 문자열에 pat이 포함되어 있는지 확인합니다.
    if pat in transformed_string:
        answer = 1
    else:
        answer = 0
        
    return answer
```
