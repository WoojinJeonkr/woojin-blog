---
external : false
title : "Heart Rate"
tag : [Baekjoon, Python]
date : 2026-01-31
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15279)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 테스트 케이스 개수 입력
N = int(input())

for _ in range(N):
    b, p = input().split()
    b = int(b)
    p = float(p)

    # 계산된 BPM
    bpm = 60.0 * b / p

    # 최소 ABPM: 마지막 박동이 가장 늦게 온 경우 (b-1 박동)
    min_abpm = 60.0 * (b - 1) / p

    # 최대 ABPM: 마지막 박동이 가장 빨리 온 경우 (b+1 박동)
    max_abpm = 60.0 * (b + 1) / p

    # 소수점 4자리까지 출력
    print(f"{min_abpm:.4f} {bpm:.4f} {max_abpm:.4f}")
```
