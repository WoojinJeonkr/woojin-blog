---
external : false
title : "Strange sorting"
tag : [Programmers, Python]
date : 2025-07-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120880)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numlist, n):
  # numlist를 정렬하되, 정렬 기준은 (n과의 거리, 값의 내림차순)
  return sorted(numlist, key=lambda x: (abs(x - n), -x)
```
