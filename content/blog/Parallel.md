---
external : false
title : "Parallel"
tag : [Programmers, Python]
date : 2025-07-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120875)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(dots):
    # 기울기를 계산하는 헬퍼 함수
    def get_slope(p1, p2):
        # x 변화량이 0인 경우는 없다고 문제에서 주어짐 (x축 또는 y축과 평행한 경우 주어지지 않음)
        return (p2[1] - p1[1]) / (p2[0] - p1[0])

    # 첫 번째 경우: (0,1)과 (2,3)을 잇고, 나머지 두 점을 잇는 경우
    # dots[0]와 dots[1]의 기울기 vs dots[2]와 dots[3]의 기울기
    if get_slope(dots[0], dots[1]) == get_slope(dots[2], dots[3]):
        return 1

    # 두 번째 경우: (0,2)와 (1,3)을 잇고, 나머지 두 점을 잇는 경우
    # dots[0]와 dots[2]의 기울기 vs dots[1]와 dots[3]의 기울기
    if get_slope(dots[0], dots[2]) == get_slope(dots[1], dots[3]):
        return 1

    # 세 번째 경우: (0,3)과 (1,2)을 잇고, 나머지 두 점을 잇는 경우
    # dots[0]와 dots[3]의 기울기 vs dots[1]와 dots[2]의 기울기
    if get_slope(dots[0], dots[3]) == get_slope(dots[1], dots[2]):
        return 1

    # 어떤 경우에도 평행한 직선이 없으면 0 반환
    return 0
```
