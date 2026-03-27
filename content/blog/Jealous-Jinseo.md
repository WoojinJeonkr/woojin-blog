---
external : false
title : "Jealous Jinseo"
tag : [Baekjoon, Python]
date : 2026-03-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15784)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# N: 행/열 크기, a: 행 위치, b: 열 위치 입력 받기
N, a, b = map(int, input().split())

# 입력이 1-based이므로 0-based로 변환
a -= 1  # 0-based index
b -= 1

# N x N 배열 입력 받기 (각 자리의 매력지수)
arr = [list(map(int, input().split())) for _ in range(N)]

# 진서의 매력지수 저장
jinseo = arr[a][b]

# 같은 행(a행)에 있는 사람들 확인
for j in range(N):
    # 자기 자신(b열)은 제외하고 더 큰 값이 있는지 확인
    if j != b and arr[a][j] > jinseo:
        # 더 잘생긴 사람이 있으면 ANGRY 출력 후 종료
        print("ANGRY")
        exit()

# 같은 열(b열)에 있는 사람들 확인
for i in range(N):
    # 자기 자신(a행)은 제외하고 더 큰 값이 있는지 확인
    if i != a and arr[i][b] > jinseo:
        # 더 잘생긴 사람이 있으면 ANGRY 출력 후 종료
        print("ANGRY")
        exit()

# 끝까지 없으면 HAPPY 출력
print("HAPPY")
```
