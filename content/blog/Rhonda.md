---
external : false
title : "Rhonda"
tag : [Baekjoon, Python]
date : 2026-03-31
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26507)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 레이어 개수 입력
i = int(input())

layers = []

# 각 레이어 입력 (10x10)
for _ in range(i):
    grid = []
    for _ in range(10):
        # 문자열 한 줄을 받아서 각 자리 숫자로 변환
        row = list(map(int, input().strip()))
        grid.append(row)
    layers.append(grid)
    input()  # 빈 줄 처리

# 데이터셋 개수
n = int(input())

for _ in range(n):
    # 사용할 레이어 인덱스들
    indices = list(map(int, input().split()))

    # 결과 10x10 배열 초기화
    result = [[0] * 10 for _ in range(10)]

    # 선택된 레이어들을 더함
    for idx in indices:
        for r in range(10):
            for c in range(10):
                result[r][c] += layers[idx][r][c]

    # 출력 (두 자리 숫자 + 공백)
    for r in range(10):
        for c in range(10):
            print(f"{result[r][c]:02d}", end=" ")
        print()
    print()  # 데이터셋 간 공백
```
