---
external: false
title: "Baekjoon 2669"
date: 2023-04-23
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2669)

## 2. Solution

## 1. Python (memory: 31256KB, time: 40ms)

```python
# 2차원 배열 생성 (시간 복잡도: O(n^2))
canvas = [[0 for _ in range(101)] for _ in range(101)]

# 4개의 직사각형 입력 받아서 canvas 배열에 그리기 (시간 복잡도: O(n^2))
for _ in range(4):
    left_x, bottom_y, right_x, top_y = map(int, input().split())
    
    # 직사각형 부분만 1로 채우기
    for i in range(left_x, right_x):
        for j in range(bottom_y, top_y):
            canvas[i][j] = 1

# 캔버스 전체 면적 구하기 (시간 복잡도: O(n^2))
total_area = 0
for row in canvas:
    total_area += sum(row)

print(total_area)
```
