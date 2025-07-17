---
external : false
title : "Make 1"
tag : [Programmers, Python]
date : 2025-07-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181880)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(num_list):
    answer = 0  # 총 연산 횟수를 저장할 변수

    for num in num_list:  # num_list의 각 숫자에 대해 반복
        current_num = num
        operations_for_current_num = 0  # 현재 숫자에 대한 연산 횟수

        # 현재 숫자가 1이 될 때까지 반복
        while current_num != 1:
            if current_num % 2 == 0:  # 숫자가 짝수라면
                current_num //= 2  # 2로 나눈다
            else:  # 숫자가 홀수라면
                current_num = (current_num - 1) // 2  # 1을 빼고 2로 나눈다
            operations_for_current_num += 1  # 연산 횟수 증가

        answer += operations_for_current_num  # 현재 숫자의 연산 횟수를 총 연산 횟수에 더한다

    return answer  # 최종 총 연산 횟수 반환
```
