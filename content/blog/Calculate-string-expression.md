---
external : false
title : "Calculate string expression"
tag : [Programmers, Python]
date : 2025-07-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120902)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(my_string):
  # 수식을 공백 기준으로 나눕니다. 예: "3 + 5 - 2" → ['3', '+', '5', '-', '2']
  tokens = my_string.split()

  # 첫 번째 숫자를 초기값으로 설정합니다.
  answer = int(tokens[0])

  # 연산자와 숫자를 차례로 읽으면서 계산을 수행합니다.
  for i in range(1, len(tokens), 2):  # i는 연산자 위치
    operator = tokens[i]             # 연산자: '+' 또는 '-'
    number = int(tokens[i + 1])      # 연산 대상 숫자

    if operator == '+':
      answer += number
    elif operator == '-':
      answer -= number

  return answer
```
