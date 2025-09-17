---
external : false
title : "Sort numbers in a String (1)"
tag : [Programmers, Python]
date : 2025-09-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120850)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(my_string):
    # 숫자들을 저장할 리스트 초기화
    answer = []
    # 문자열의 각 문자를 하나씩 확인
    for char in my_string:
        # 문자가 숫자인 경우
        if char.isdigit():
            # 정수로 변환하여 리스트에 추가
            answer.append(int(char))
    # 리스트를 오름차순으로 정렬
    answer.sort()
    # 정렬된 숫자 리스트 반환
    return answer
```
