---
external : false
title : "Bread"
tag : [Baekjoon, Python]
date : 2025-11-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/25377)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 가게의 개수 입력
N = int(input())

# 빵을 살 수 있는 시간 중 최소값을 저장할 변수 (초기값: 무한대)
ans = float('inf')

# 각 가게에 대해 반복
for _ in range(N):
    A, B = map(int, input().split())  # A: 이동 시간, B: 빵 도착까지 남은 시간

    # 빵 도착 전에 도착할 수 있는 경우 (A ≤ B)
    if A <= B:
        ans = min(ans, B)  # 가능한 가게 중 가장 빨리 빵을 살 수 있는 시간 저장

# 빵을 살 수 있는 가게가 없을 경우 -1 출력
# 있다면 최소 시간 출력
print(ans if ans != float('inf') else -1)
```
