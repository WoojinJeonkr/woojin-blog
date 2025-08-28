---
external : false
title : "Split and store in array"
tag : [Programmers, Python]
date : 2025-08-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120913)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(my_str, n):
    answer = []  # 결과를 담을 리스트
    
    # 문자열을 n 단위로 잘라서 리스트에 추가
    for i in range(0, len(my_str), n):
        answer.append(my_str[i:i+n])  # i부터 i+n까지 슬라이싱하여 추가
    
    return answer  # 최종 결과 반환
```
