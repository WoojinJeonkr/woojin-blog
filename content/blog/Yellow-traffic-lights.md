---
external : false
title : "Yellow traffic lights"
tag : [Baekjoon, Python]
date : 2026-04-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468371?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

def solution(signals):
    n = len(signals)  # 신호등 개수

    # 각 신호등의 전체 주기
    cycle_lengths = [0] * n
    for i in range(n):
        cycle_lengths[i] = sum(signals[i])

    # 전체 반복 주기의 최소공배수
    total_cycle_lcm = 1
    for i in range(n):
        total_cycle_lcm = total_cycle_lcm * cycle_lengths[i] // math.gcd(total_cycle_lcm, cycle_lengths[i])

    # 1초부터 전체 주기까지 탐색
    for current_time in range(1, total_cycle_lcm + 1):
        is_all_yellow = True

        for i in range(n):
            g, y, r = signals[i]
            cycle_length = cycle_lengths[i]
            time_in_cycle = (current_time - 1) % cycle_length + 1

            # 노란불 구간이 아니면 탈락
            if not (g + 1 <= time_in_cycle <= g + y):
                is_all_yellow = False
                break

        if is_all_yellow:
            return current_time

    return -1
```
