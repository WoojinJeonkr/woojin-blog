---
external : false
title : "369 Game"
tag : [Programmers, Python]
date : 2025-04-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120891)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(order):
  answer = 0  # 박수 횟수를 저장할 변수 초기화
  for digit in str(order):  # order를 문자열로 변환하여 각 자릿수를 반복
    if digit in ["3", "6", "9"]:  # 자릿수가 3, 6, 9 중 하나인지 확인
      answer += 1  # 해당되면 박수 횟수 1 증가
  return answer  # 최종 박수 횟수 반환
```
