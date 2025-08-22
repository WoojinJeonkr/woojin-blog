---
external : false
title : "The next number"
tag : [Programmers, Python]
date : 2025-08-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120924)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(common):
    # 등차수열인지 확인: 두 번째 항 - 첫 번째 항 == 세 번째 항 - 두 번째 항
    if common[1] - common[0] == common[2] - common[1]:
        # 등차수열이면 마지막 항 + 공차
        return common[-1] + (common[1] - common[0])
    else:
        # 등비수열이면 마지막 항 × 공비
        return common[-1] * (common[1] // common[0])
```
