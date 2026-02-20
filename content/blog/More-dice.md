---
external : false
title : "More dice"
tag : [Baekjoon, Python]
date : 2026-02-20
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9288)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 빠른 입력을 위해 sys.stdin.readline 사용
import sys

input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input().strip())

# 각 테스트 케이스 처리
for case in range(1, T + 1):
    # 두 주사위 합 입력
    S = int(input().strip())

    # 케이스 번호 출력
    print(f"Case {case}:")

    # 첫 번째 주사위 값을 1~6까지 순회
    for a in range(1, 7):
        # 두 번째 주사위 값 계산
        b = S - a

        # 주사위 범위(1~6) 확인 및 중복 방지(a ≤ b)
        if 1 <= b <= 6 and a <= b:
            # (작은 값, 큰 값) 형태로 출력
            print(f"({a},{b})")
```
