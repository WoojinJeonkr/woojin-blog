---
external : false
title : "Sum of cubes"
tag : [Baekjoon, Python]
date : 2025-11-25
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/28701)에서 확인하실 수 있습니다.

## 2. Answer

```py
N = int(input())

# 1부터 N까지의 합
s = N * (N + 1) // 2
# 합의 제곱
s_sq = s * s
# 1부터 N까지의 세제곱의 합
cube_sum = sum(i*i*i for i in range(N + 1))

print(s)
print(s_sq)
print(cube_sum)
```
