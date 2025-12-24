---
external : false
title : "MT preparation"
tag : [Baekjoon, Python]
date : 2025-12-24
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/34891)에서 확인하실 수 있습니다.

## 2. Answer

```py
N, M = map(int, input().split())

# 필요한 박스의 최소 개수
boxes = (N + M - 1) // M

print(boxes)
```
