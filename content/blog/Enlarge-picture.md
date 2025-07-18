---
external : false
title : "Enlarge picture"
tag : [Programmers, Python]
date : 2025-07-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181836)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(picture, k):
    answer = []
    
    for row in picture:  # picture의 각 행을 순회
        expanded_row = ""
        for char in row:  # 현재 행의 각 문자를 순회
            expanded_row += char * k  # 각 문자를 k번 반복하여 확장
        
        for _ in range(k):  # 확장된 행을 k번 반복하여 answer에 추가
            answer.append(expanded_row)
            
    return answer
```
