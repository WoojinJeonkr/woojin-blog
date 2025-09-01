---
external : false
title : "Make array 6"
tag : [Programmers, Python]
date : 2025-09-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181859)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr):
    # 새로운 배열(스택 역할)을 저장할 리스트
    answer = []
    
    # arr의 원소를 하나씩 순회
    for num in arr:
         # answer가 비어 있으면 현재 원소를 추가
        if not answer:
            answer.append(num)
        # answer의 마지막 원소와 현재 원소가 같으면 마지막 원소 제거
        elif answer[-1] == num:
            answer.pop()
        # 마지막 원소와 현재 원소가 다르면 현재 원소를 추가
        else:
            answer.append(num)
    
    # 최종적으로 answer가 비어 있으면 [-1] 반환, 아니면 answer 반환
    return answer if answer else [-1]
```
