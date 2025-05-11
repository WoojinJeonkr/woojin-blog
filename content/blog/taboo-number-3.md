---
external : false
title : "taboo number 3"
tag : [Programmers, Python]
date : 2025-05-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120871)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
    answer = 0  # 결과를 저장할 변수 초기화
    count = 0   # 3x 마을 숫자의 개수를 셀 변수 초기화
    num = 0     # 현재 검사하는 숫자를 나타내는 변수 초기화
    while count < n:  # n번째 3x 마을 숫자를 찾을 때까지 반복
        num += 1  # 숫자를 1씩 증가
        # 현재 숫자가 3의 배수가 아니고, 문자열로 변환했을 때 '3'을 포함하지 않으면
        if num % 3 != 0 and '3' not in str(num):
            count += 1  # 3x 마을 숫자의 개수를 증가
            answer = num  # 찾은 3x 마을 숫자를 결과 변수에 저장
    return answer  # 최종 결과 반환
```
