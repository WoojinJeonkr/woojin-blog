---
external : false
title : "count between x"
tag : [Programmers, Python]
date : 2025-07-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181867)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(myString):
    # myString을 "x"를 기준으로 나눔
    # split() 함수는 구분자로 시작하거나 끝나는 경우 빈 문자열을 포함하여 반환
    # 예: "xabcx" -> ['', 'abc', '']
    # 예: "oxooxoxxox" -> ['o', 'oo', 'o', '', 'o', '']
    parts = myString.split('x')

    # 나눠진 각 문자열의 길이를 저장할 리스트를 초기화
    answer = []

    # parts 리스트의 각 요소에 대해 길이를 구하여 answer 리스트에 추가
    for part in parts:
        answer.append(len(part))

    return answer
```
