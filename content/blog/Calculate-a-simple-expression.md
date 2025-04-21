---
external : false
title : "Calculate a simple expression"
tag : [Programmers, Python]
date : 2025-04-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181865)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(binomial):
  answer = 0
  binomial_list = binomial.split()  # 입력받은 문자열을 공백 기준으로 분리하여 리스트로 만듦
  num1 = int(binomial_list[0])      # 첫 번째 숫자를 정수로 변환
  op = binomial_list[1]             # 연산자 추출
  num2 = int(binomial_list[2])      # 두 번째 숫자를 정수로 변환
  if op == "+":                     # 연산자가 +이면
    answer = num1 + num2          # 두 수를 더함
  elif op == "-":                   # 연산자가 -이면
    answer = num1 - num2          # 두 수를 뺌
  else:                             # 위의 두 경우가 아니면 (곱셈)
    answer = num1 * num2          # 두 수를 곱함
  return answer                     # 결과 반환
```
