---
external : false
title : "Ramen formula"
tag : [Baekjoon, Python]
date : 2025-11-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/30007)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 라면을 끓이는 횟수 입력
N = int(input().strip())

for _ in range(N):
    # A: 라면 계수, B: 기본 물의 양, X: 끓일 라면 수
    A, B, X = map(int, input().split())
    # 라면 공식에 따라 필요한 물의 양 계산
    W = A * (X - 1) + B
    # 계산된 물의 양 출력
    print(W)

```
