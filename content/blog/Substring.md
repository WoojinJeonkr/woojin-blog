---
external : false
title : "Substring"
tag : [Programmers, Python]
date : 2025-07-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181842)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(str1, str2):
    # str1이 str2의 부분 문자열인지 확인하고, 결과에 따라 1 또는 0을 반환합니다.
    if str1 in str2:
        answer = 1
    else:
        answer = 0
    
    return answer
```
