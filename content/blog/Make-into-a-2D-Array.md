---
external : false
title : "Make into a 2D Array"
tag : [Programmers, Python]
date : 2025-08-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120842)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list, n):
    answer = [[]]
    
    # 첫 번째 빈 리스트를 건너뛰고, 실제 결과 리스트를 채워나감
    # num_list를 n개씩 잘라서 answer에 추가
    for i in range(0, len(num_list), n):
        answer.append(num_list[i:i+n])
        
    # 초기 [[]]를 제거하고 실제 결과만 남김
    return answer[1:]
```
