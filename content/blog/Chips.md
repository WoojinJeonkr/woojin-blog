---
external : false
title : "Chips"
tag : [Baekjoon, Python]
date : 2026-03-15
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32902)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 캔 개수 k, 캔당 칩 개수 n 입력
k, n = map(int, input().split())

# 최소 시간: 한 캔 칩 n개 모두 섭취 후 다음 분 빈 캔 선택 → n+1
min_time = n + 1

# 최대 시간: 전체 칩 k*n 모두 섭취 후 다음 분 빈 캔 선택 → k*n+1
max_time = k * n + 1

# 최소 시간, 최대 시간 출력
print(min_time, max_time)
```
