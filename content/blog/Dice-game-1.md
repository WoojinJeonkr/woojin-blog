---
external : false
title : "Dice game 1"
tag : [Programmers, Python]
date : 2025-03-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181839)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(a, b):
  # 초기 답안을 0으로 설정
  answer = 0
  # a와 b가 모두 홀수일 경우
  if a % 2 == 1 and b % 2 == 1:
    # a와 b의 제곱을 더함
    answer = a ** 2 + b ** 2
  # a나 b 중 하나가 홀수일 경우
  elif a % 2 == 1 or b % 2 == 1:
    # a와 b의 합에 2를 곱함
    answer = 2 * (a + b)
  # a와 b가 모두 짝수일 경우
  else:
    # a와 b의 절대 차를 구함
    answer = abs(a - b)
  # 최종 답안 반환
  return answer
```
