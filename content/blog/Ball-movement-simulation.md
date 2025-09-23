---
external : false
title : "Ball movement simulation"
tag : [Programmers, Python]
date : 2025-09-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87391)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n, m, x, y, queries):
    # 도착 지점 (x, y)를 기준으로 가능한 시작 범위 설정
    x1, x2, y1, y2 = x, x, y, y

    # 쿼리를 역순으로 처리 (도착지에서 출발지로 역추적)
    for command, distance in reversed(queries):
        if command == 0:  # 열 감소 (←): 역방향으로는 열 증가 (→)
            y2 += distance
            if y2 >= m:  # 격자 너머로 나가면 최대 열로 클리핑
                y2 = m - 1
            if y1 != 0:  # y1이 왼쪽 끝이 아니면 이동 가능
                y1 += distance
            if y1 >= m:  # 격자 밖으로 나가면 불가능
                return 0
        elif command == 1:  # 열 증가 (→): 역방향으로는 열 감소 (←)
            y1 -= distance
            if y1 < 0:
                y1 = 0
            if y2 != m - 1:  # y2가 오른쪽 끝이 아니면 이동 가능
                y2 -= distance
            if y2 < 0:
                return 0
        elif command == 2:  # 행 감소 (↑): 역방향으로는 행 증가 (↓)
            x2 += distance
            if x2 >= n:
                x2 = n - 1
            if x1 != 0:
                x1 += distance
            if x1 >= n:
                return 0
        elif command == 3:  # 행 증가 (↓): 역방향으로는 행 감소 (↑)
            x1 -= distance
            if x1 < 0:
                x1 = 0
            if x2 != n - 1:
                x2 -= distance
            if x2 < 0:
                return 0

    # 가능한 시작점의 개수 반환 (직사각형 영역의 크기)
    return (x2 - x1 + 1) * (y2 - y1 + 1)
```
