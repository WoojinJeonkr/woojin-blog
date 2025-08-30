---
external : false
title : "Split and sort string"
tag : [Programmers, Python]
date : 2025-08-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181866)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(myString):
    # 문자열을 'x' 기준으로 나누기
    parts = myString.split("x")
    answer = []
    
    # 나눈 문자열 중 빈 문자열이 아닌 것만 결과 리스트에 추가
    for part in parts:
        if part != "":
            answer.append(part)
            
    # 사전순으로 정렬하여 반환
    return sorted(answer)
```
