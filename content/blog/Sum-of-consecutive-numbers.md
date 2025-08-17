---
external : false
title : "Sum of consecutive numbers"
tag : [Programmers, Python]
date : 2025-08-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120923)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num, total):
    answer = []
    
    # 연속된 num개의 수의 합이 total이 되도록 하는 시작 숫자 계산
    # 시작 숫자 = (평균값) - (num-1)//2
    start = total // num - (num - 1) // 2
    
    # 시작 숫자부터 num개의 연속된 정수를 answer에 추가
    for i in range(num):
        answer.append(start + i)
    
    # 결과 반환
    return answer
```
