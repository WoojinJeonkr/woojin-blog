---
external : false
title : "OX Quiz"
tag : [Programmers, Python]
date : 2025-05-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120907)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(quiz):
  answer = [] # 결과를 저장할 리스트 초기화
  for expression in quiz: # quiz 배열의 각 수식에 대해 반복
    parts = expression.split() # 공백을 기준으로 수식을 분리
    num1 = int(parts[0]) # 첫 번째 숫자
    operator = parts[1] # 연산자
    num2 = int(parts[2]) # 두 번째 숫자
    result = int(parts[4]) # 수식의 결과

    calculated_result = 0 # 계산된 결과를 저장할 변수 초기화
    if operator == '+': # 연산자가 덧셈인 경우
      calculated_result = num1 + num2 # 두 수를 더함
    elif operator == '-': # 연산자가 뺄셈인 경우
      calculated_result = num1 - num2 # 두 수를 뺌

    if calculated_result == result: # 계산된 결과와 주어진 결과가 같은 경우
      answer.append("O") # "O"를 결과 리스트에 추가
    else: # 계산된 결과와 주어진 결과가 다른 경우
      answer.append("X") # "X"를 결과 리스트에 추가
  return answer # 결과 리스트 반환
```
