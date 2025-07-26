---
external : false
title : "Rotate array"
tag : [Programmers, Python]
date : 2025-07-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120844)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numbers, direction):
    # 만약 방향이 "right"이면
    if direction == "right":
        # 마지막 원소를 맨 앞으로 이동시키고 나머지 원소들을 뒤에 붙임
        return [numbers[-1]] + numbers[:-1]
    # 만약 방향이 "left"이면
    elif direction == "left":
        # 첫 번째 원소를 맨 뒤로 이동시키고 나머지 원소들을 앞에 붙임
        return numbers[1:] + [numbers[0]]
```
