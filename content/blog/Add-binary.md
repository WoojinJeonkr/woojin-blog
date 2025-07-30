---
external : false
title : "Add binary"
tag : [Programmers, Python]
date : 2025-07-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120885)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(bin1, bin2):
    # 이진수 문자열 → 10진수로 변환 후 더한 뒤 → 다시 이진수 문자열로 변환 ('0b' 제거)
    answer = bin(int(bin1, 2) + int(bin2, 2))[2:]
    return answer
```
