---
external : false
title : "Platform depth"
tag : [Baekjoon, Python]
date : 2026-03-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32193)에서 확인하실 수 있습니다.

## 2. Answer

```py
# sys 모듈을 사용하여 빠른 입력을 처리하기 위해 불러옴
import sys

# 기본 input 대신 sys.stdin.readline을 사용하여 입력 속도 향상
input = sys.stdin.readline

# 역의 개수 N 입력
N = int(input())

# 현재까지 계산된 승강장의 깊이를 저장할 변수 초기화
depth = 0

# N개의 역에 대해 반복
for _ in range(N):
    # 각 역에서 지표면 변화량 A와 승강장 변화량 B 입력
    A, B = map(int, input().split())

    # 깊이는 (지표면 높이 - 승강장 높이)이므로 A - B 값 누적
    depth += (A - B)

    # 현재 역의 깊이 출력
    print(depth)
```
