---
external : false
title : "Hidden number sum (1)"
tag : [Programmers, Python]
date : 2025-03-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120851)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 주어진 문자열 안 숫자들만을 더하는 것이 목표입니다. 이를 위해 반복문을 사용하여 문자열의 각 문자를 하나씩 꺼내어 처리합니다.

문자를 꺼냈다면 isdigit() 함수를 사용하여 각 문자가 숫자인지 여부를 판단합니다. 이 함수는 문자가 숫자일 경우 True, 숫자가 아닐 경우 False를 반환합니다.

다음으로 숫자로 판별한 문자를 정수 형태로 바꿔줍니다. int() 함수를 사용하여 문자를 숫자로 변환한 후, 합산합니다.

마지막으로, 모든 문자를 순회한 후에 숫자의 합을 반환합니다.

## 3. Answer

```python
def solution(my_string):
  # 결과를 담을 변수를 선언
  answer = 0
  # 주어진 문자열에서 문자를 하나씩 꺼내오기기
  for i in my_string:
    # 문자가 숫자인지 확인
    if i.isdigit():
      # 숫자로 변환하여 합산
      answer += int(i)
  # 최종 결과를 반환
  return answer
```
