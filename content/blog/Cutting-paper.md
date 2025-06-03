---
external : false
title : "Cutting paper"
tag : [Programmers, Python]
date : 2025-06-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120922)에서 확인하실 수 있습니다.

## 2. Answer

```python
# [가위질 계산 요약]
# - 종이를 1 x 1 크기로 자르기 위한 최소 가위질 횟수는 (M * N - 1)번입니다.
# - 종이를 한 번 자를 때마다 조각이 하나씩 늘어나므로,
#   M x N 크기의 종이를 1 x 1로 만들기 위해서는 총 M*N개의 조각이 필요합니다.
# - 처음 한 장이 있으므로 (M*N - 1)번만 자르면 됩니다.

def solution(M, N):
  # 최소 가위질 횟수는 (M * N - 1) 공식으로 계산합니다.
  answer = M * N - 1
  return answer
```
