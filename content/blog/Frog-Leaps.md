---
external : false
title : "Frog Leaps"
tag : [Baekjoon, Python]
date : 2026-03-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15001)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

n = int(input())

# 각 정류장의 위치 입력
x = [int(input()) for _ in range(n)]

from collections import deque

# 직선(line) = (기울기 m, 절편 b)
# y = m*x + b 값을 계산하는 함수
def f(line, x):
    m, b = line
    return m * x + b

# 새 직선을 추가할 때,
# 가운데 직선이 필요 없는지(Convex Hull에서 제거 가능한지) 판단
def bad(l1, l2, l3):
    m1, b1 = l1
    m2, b2 = l2
    m3, b3 = l3
    # 교점 비교를 이용한 Convex Hull 유지 조건
    return (b2 - b1) * (m2 - m3) >= (b3 - b2) * (m1 - m2)

# dp[i] = i번째 정류장까지 도달하는 최소 에너지
dp = [0] * n

# Convex Hull Trick을 위한 deque
hull = deque()

# 시작 위치 (첫 번째 정류장)
# dp[0] = 0
# 직선: y = m*x + b
# m = -2*x0
# b = dp[0] + x0^2
hull.append((-2 * x[0], dp[0] + x[0] ** 2))

# 두 번째 정류장부터 계산
for i in range(1, n):
    xi = x[i]

    # 현재 xi에서 최소값을 주는 직선을 찾기 위해
    # 앞쪽 직선이 더 이상 최적이 아니면 제거
    while len(hull) >= 2 and f(hull[0], xi) >= f(hull[1], xi):
        hull.popleft()

    # 점프 비용 계산
    # dp[i] = xi^2 + 최소 직선값
    dp[i] = xi * xi + f(hull[0], xi)

    # 새로운 직선 생성
    new_line = (-2 * xi, dp[i] + xi * xi)

    # Convex Hull 유지
    # 마지막 직선이 불필요해지면 제거
    while len(hull) >= 2 and bad(hull[-2], hull[-1], new_line):
        hull.pop()

    hull.append(new_line)

# 마지막 정류장까지의 최소 에너지 출력
print(dp[-1])
```
