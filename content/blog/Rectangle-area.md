---
external : false
title : "Rectangle area"
tag : [Programmers, Python]
date : 2025-08-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120860)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(dots):
    # x 좌표와 y 좌표를 각각 분리
    xs = [x for x, y in dots]
    ys = [y for x, y in dots]

    # 가로, 세로 길이 계산
    width = max(xs) - min(xs)
    height = max(ys) - min(ys)

    # 넓이 반환
    return width * height
```
