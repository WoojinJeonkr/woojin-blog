---
external : false
title : "qr code"
tag : [Programmers, Python]
date : 2025-06-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181903?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(q, r, code):
    # 결과를 저장할 문자열 초기화
    answer = ''
    # code 문자열의 각 인덱스를 순회
    for i in range(len(code)):
        # 현재 인덱스(i)를 q로 나눈 나머지가 r과 같다면
        if i % q == r:
            # 해당 인덱스의 문자를 answer에 추가
            answer += code[i]
    # 최종 결과 반환
    return answer
```
