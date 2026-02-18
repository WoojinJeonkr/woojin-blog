---
external : false
title : "Area of rectangle"
tag : [Baekjoon, Python]
date : 2026-02-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/22341)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

N, C = map(int, input().split())

A = N  # 현재 세로 길이
B = N  # 현재 가로 길이

for _ in range(C):
    X, Y = map(int, input().split())

    # 점이 범위 밖이면 무시
    if X >= A or Y >= B:
        continue

    # 두 경우 면적 계산
    area_horizontal = X * B  # 가로 자르기
    area_vertical = A * Y    # 세로 자르기

    # 조건에 따라 선택 (같으면 가로)
    if area_horizontal >= area_vertical:
        A = X
    else:
        B = Y

print(A * B)
```
