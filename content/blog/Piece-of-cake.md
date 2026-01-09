---
external : false
title : "Piece of cake"
tag : [Baekjoon, Python]
date : 2026-01-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17874)에서 확인하실 수 있습니다.

## 2. Answer

```py
n, h, v = map(int, input().split())

# 세로 방향(위/아래 중 더 큰 높이)
width  = max(h, n - h)
# 가로 방향(좌/우 중 더 큰 폭)
height = max(v, n - v)

volume = width * height * 4
print(volume)
```
