---
external : false
title : "Sum of hidden numbers (2)"
tag : [Programmers, Python]
date : 2025-09-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120864)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(my_string):
    answer = 0        # 최종 합을 저장할 변수
    num_str = ''      # 숫자를 임시로 저장할 문자열

    # 문자열의 각 문자에 대해 반복
    for char in my_string:
        if char.isdigit():           # 문자가 숫자인 경우
            num_str += char          # 임시 숫자 문자열에 추가
        else:                        # 문자가 숫자가 아닌 경우
            if num_str != '':        # 숫자 문자열이 비어있지 않다면
                answer += int(num_str)  # 정수로 변환하여 합계에 추가
                num_str = ''         # 숫자 문자열 초기화

    # 반복문이 끝난 후에도 숫자가 남아 있을 수 있으므로 마지막으로 처리
    if num_str != '':
        answer += int(num_str)

    return answer  # 최종 결과 반환
```
