---
external : false
title : "Ant Colony"
tag : [Programmers, Python]
date : 2025-07-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120837)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(hp):
    answer = 0

    # 장군개미 (공격력 5)
    answer += hp // 5  # hp를 5로 나눈 몫만큼 장군개미 추가
    hp %= 5           # hp를 5로 나눈 나머지로 업데이트

    # 병정개미 (공격력 3)
    answer += hp // 3  # 남은 hp를 3으로 나눈 몫만큼 병정개미 추가
    hp %= 3           # hp를 3으로 나눈 나머지로 업데이트

    # 일개미 (공격력 1)
    answer += hp       # 남은 hp는 모두 일개미로 채움 (공격력 1이므로 hp 자체가 일개미 수)

    return answer
```
