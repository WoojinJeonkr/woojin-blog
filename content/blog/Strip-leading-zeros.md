---
external : false
title : "Strip leading zeros"
tag : [Programmers, Python]
date : 2025-07-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181847)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n_str):
    # 첫 0이 아닌 숫자의 인덱스를 찾기 위해 0으로 초기화
    first_digit_index = 0 
    
    # 문자열을 순회하며 첫 0이 아닌 숫자 찾기
    for i, char in enumerate(n_str):
        # 0이 아닌 숫자를 찾으면 인덱스 저장 후 반복 중단
        if char != '0':
            first_digit_index = i
            break
            
    # 찾은 인덱스부터 문자열 끝까지 슬라이싱하여 반환
    return n_str[first_digit_index:]
```
