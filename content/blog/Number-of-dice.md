---
external : false
title : "Number of dice"
tag : [Programmers, Python]
date : 2025-08-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120845)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(box, n):
    # 각 방향(가로, 세로, 높이)에 들어갈 수 있는 주사위 개수를 구한 후 곱함
    # box[0] // n: 가로 방향에 들어갈 수 있는 주사위 개수
    # box[1] // n: 세로 방향에 들어갈 수 있는 주사위 개수
    # box[2] // n: 높이 방향에 들어갈 수 있는 주사위 개수
    answer = (box[0] // n) * (box[1] // n) * (box[2] // n)
    return answer
```
