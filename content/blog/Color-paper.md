---
external : false
title : "Color paper"
tag : [Baekjoon, Python]
date : 2025-12-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10163)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

def main():
    data = list(map(int, sys.stdin.read().split()))
    it = iter(data)
    N = next(it)
    rects = []
    max_coord = 1001  # 문제 조건에서 최대 격자 크기

    for _ in range(N):
        x = next(it); y = next(it); w = next(it); h = next(it)
        rects.append((x, y, w, h))  # 각 색종이의 정보 저장

    grid = [[0] * max_coord for _ in range(max_coord)]  # 격자 초기화

    # 색종이를 순서대로 격자에 칠함 (뒤에 올수록 앞의 색종이를 덮음)
    for idx, (x, y, w, h) in enumerate(rects, start=1):
        x_end = x + w
        y_end = y + h
        for yy in range(y, y_end):
            row = grid[yy]
            for xx in range(x, x_end):
                row[xx] = idx  # 해당 칸을 색종이 번호로 덮기

    # 각 색종이가 최종적으로 보이는 칸 수 계산
    counts = [0] * (N + 1)
    for yy in range(max_coord):
        row = grid[yy]
        for val in row:
            if val:
                counts[val] += 1

    # 순서대로 출력
    out = '\n'.join(str(counts[i]) for i in range(1, N+1))
    print(out)

if __name__ == "__main__":
    main()
```
