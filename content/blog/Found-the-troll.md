---
external : false
title : "Found the troll"
tag : [Baekjoon, Python]
date : 2025-12-25
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/25576)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# N: 구독한 스트리머 수, M: 시청자 변화 추이 길이
N, M = map(int, input().split())

# 랄파의 시청자 변화 추이
ralpha = list(map(int, input().split()))

# 랄파와 사이가 나쁜 스트리머 수
bad = 0

# 랄파를 제외한 나머지 스트리머들 검사
for _ in range(N - 1):
    streamer = list(map(int, input().split()))
    diff_sum = 0

    # 각 시간대별 시청자 차이의 합 계산
    for j in range(M):
        diff_sum += abs(ralpha[j] - streamer[j])

        # 차이의 합이 2000을 초과하면 사이가 나쁨
        if diff_sum > 2000:
            bad += 1
            break

# 랄파를 제외한 스트리머 중 절반 이상이 사이가 나쁘면 악질
if bad * 2 >= (N - 1):
    print("YES")
else:
    print("NO")
```
