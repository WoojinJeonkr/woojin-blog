---
external : false
title : "Egg Drop"
tag : [Baekjoon, Python]
date : 2025-12-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11606)에서 확인하실 수 있습니다.

## 2. Answer

```py
n, k = map(int, input().split())

safe_max = 1       # 가장 높은 SAFE 층
broken_min = k     # 가장 낮은 BROKEN 층

for _ in range(n):
    floor, result = input().split()
    floor = int(floor)

    if result == "SAFE":
        safe_max = max(safe_max, floor)
    else:  # BROKEN
        broken_min = min(broken_min, floor)

# 깨질 수도 있는 최저 층
lowest_break = safe_max + 1

# 안 깨질 수도 있는 최고 층
highest_safe = broken_min - 1

print(lowest_break, highest_safe)
```
