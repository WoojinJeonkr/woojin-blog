---
external : false
title : "Plotting points"
tag : [Programmers, Python]
date : 2025-06-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/140107)에서 확인하실 수 있습니다.

## 2. Answer

```python
import math

def solution(k, d):
  answer = 0
  # x 좌표를 0부터 d까지 k의 배수로 증가시키며 반복
  for x_coord in range(0, d + 1, k):
    # 현재 x 좌표에서 원점과의 거리가 d를 넘지 않는 최대 y 좌표 계산
    # x_coord^2 + y_coord^2 <= d^2
    # y_coord^2 <= d^2 - x_coord^2
    max_y_squared = d**2 - x_coord**2
    max_y_val = math.sqrt(max_y_squared)

    # 계산된 최대 y 좌표 이하의 k의 배수 개수 탐색
    # 0*k부터 시작하므로 +1
    count_y_multiples = math.floor(max_y_val / k) + 1

    # 해당 x 좌표에 대해 가능한 y 좌표의 개수를 총점 합산
    answer += count_y_multiples

  return answer
```
