---
external : false
title : "Move table"
tag : [Baekjoon, Python]
date : 2025-11-16
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/7348)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    # 복도 구간을 나타내는 배열
    corridor = [0] * 201

    for _ in range(N):
        s, t = map(int, input().split())

        # 방 번호를 복도 번호로 변환
        s = (s + 1) // 2
        t = (t + 1) // 2

        # 구간의 시작과 끝 정리
        a, b = min(s, t), max(s, t)

        # 해당 복도 구간 사용 횟수 증가
        for i in range(a, b + 1):
            corridor[i] += 1

    # 가장 많이 겹치는 복도 수 × 10분
    print(max(corridor) * 10)
```
