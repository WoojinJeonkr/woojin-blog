---
external : false
title : "ZOAC 4"
tag : [Baekjoon, Python]
date : 2025-12-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/23971)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

# H: 행 개수, W: 열 개수
# N: 세로로 비워야 하는 칸 수
# M: 가로로 비워야 하는 칸 수
H, W, N, M = map(int, input().split())

# 사람을 앉힐 수 있는 행 간격 = N+1
# 전체 행 H에서 (N+1) 간격으로 사람을 배치할 수 있는 최대 개수
rows = math.ceil(H / (N + 1))

# 사람을 앉힐 수 있는 열 간격 = M+1
# 전체 열 W에서 (M+1) 간격으로 사람을 배치할 수 있는 최대 개수
cols = math.ceil(W / (M + 1))

# 최대로 앉힐 수 있는 사람 수 = 행 개수 × 열 개수
print(rows * cols)
```
