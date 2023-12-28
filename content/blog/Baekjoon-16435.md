---
external: false
title: "Baekjoon 16435"
date: 2023-11-12
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/16435)

## 2. 정답 코드 (Python, memory: 31120KB, time: 44ms)

```python
def max_snakebird_length(N, L, heights):
    # 과일 높이를 오름차순으로 정렬합니다.
    heights.sort()
    # 각 과일의 높이를 순회하며 스네이크버드의 길이를 늘릴 수 있는지 확인합니다.
    for height in heights:
        # 현재 과일의 높이가 스네이크버드의 길이보다 작거나 같으면 먹을 수 있습니다.
        if height <= L:
            # 스네이크버드의 길이를 1만큼 늘립니다.
            L += 1
    # 최종적으로 스네이크버드의 최대 길이를 반환합니다.
    return L

# 입력을 받습니다.
N, L = map(int, input().split())
heights = list(map(int, input().split()))

# 결과를 계산하고 출력합니다.
result = max_snakebird_length(N, L, heights)
print(result)
```
