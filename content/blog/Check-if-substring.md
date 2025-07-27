---
external : false
title : "Check if substring"
tag : [Programmers, Python]
date : 2025-07-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181843)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(my_string, target):
    # my_string 안에 target이 포함되어 있는지 확인
    if target in my_string:
        # 포함되어 있다면 1 반환
        return 1
    else:
        # 포함되어 있지 않다면 0 반환
        return 0
```
