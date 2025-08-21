---
external : false
title : "Count 7"
tag : [Programmers, Python]
date : 2025-08-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120912)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(array):
    answer = 0  # 최종 결과(7의 개수)를 저장할 변수
    
    for num in array:  # 배열의 각 원소를 하나씩 확인
        # 숫자를 문자열로 변환한 뒤 '7'이 몇 번 등장하는지 세고 answer에 누적
        answer += str(num).count('7')  
    
    return answer  # 7의 총 개수를 반환
```
